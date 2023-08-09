import styles from "./column.module.css";
import Task from "./Task";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          className={styles.container}
          ref={provided.innerRef}
        >
          <h3 {...provided.dragHandleProps}>{column.title}</h3>
          <Droppable droppableId={column.id} type="task">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={styles.taskList}
                style={{ width: "90%" }}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
