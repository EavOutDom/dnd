import styles from "./task.module.css";

const Task = ({ task }) => {
  return <div className={styles.container}>{task.content}</div>;
};

export default Task;
