export const initialData = {
  tasks: {
    task1: { id: "task1", content: "create new api" },
    task2: { id: "task2", content: "fix api" },
    task3: { id: "task3", content: "fetch api" },
    task4: { id: "task4", content: "display data" },
    task5: { id: "task5", content: "Testing" },
    task6: { id: "task6", content: "Testing" },
    task7: { id: "task7", content: "Testing" },
    task8: { id: "task8", content: "Testing" },
    task9: { id: "task9", content: "Testing" },
    task10: { id: "task10", content: "Testing" },
  },
  columns: {
    column1: {
      id: "column1",
      title: "To do",
      taskIds: ["task1", "task4"],
    },
    column2: {
      id: "column2",
      title: "In progress",
      taskIds: [
        "task2",
        "task3",
        "task6",
        "task7",
        "task8",
        "task9",
        "task10",
      ],
    },
    column3: {
      id: "column3",
      title: "Done",
      taskIds: ["task5"],
    },
  },
  columnsOrder: ["column1", "column2", "column3"],
};
