import styles from "./column.module.css";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ column, tasks }) => {
  return (
    <div className={styles.container}>
      <h3>{column.title}</h3>
      <Droppable>
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </Droppable>
    </div>
  );
};

export default Column;
