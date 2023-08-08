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
    const finish = data.columns[destination.draggableId];
    if (start === finish) {
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...column,
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
    // const newTaskIds = Array.from(start.)
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
