import "./styles.css";
import { initialData } from "./initial-data";
import { useState } from "react";
import Column from "./dnd/Colum";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  const [data, setData] = useState(initialData);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      setData((pre) => ({
        ...pre,
        columns: {
          ...pre.columns,
          [newColumn.id]: newColumn,
        },
      }));
      return;
    }

    //moving between list
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    console.log(newFinish);
    setData((pre) => ({
      ...pre,
      columns: {
        ...pre.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }));
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={handleDragEnd}>
        {data.columnsOrder.map((order) => {
          const column = data.columns[order];
          const tasks = column.taskIds.map((id) => data.tasks[id]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </div>
  );
}
