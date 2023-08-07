import "./styles.css";
import { initialData } from "./initial-data";
import { useState } from "react";
import Column from "./dnd/Colum";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  const [data, setData] = useState(initialData);

  const handleDragEnd = (result) => {};

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
