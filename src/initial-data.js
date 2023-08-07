export const initialData = {
  tasks: {
    task1: { id: "task1", content: "create new api" },
    task2: { id: "task2", content: "fix api" },
    task3: { id: "task3", content: "fetch api" },
    task4: { id: "task4", content: "display data" },
  },
  columns: {
    column1: {
      id: "column1",
      title: "To do",
      taskIds: ["task1", "task2", "task3", "task4"],
    },
  },
  columnsOrder: ["column1"],
};
