import styles from "./task.module.css";
import { Draggable } from "react-beautiful-dnd";
import { memo } from "react";

const Task = memo(({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.container}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
});

export default Task;
