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
    task11: { id: "task11", content: "Testing" },
    task12: { id: "task12", content: "Testing" },
    task13: { id: "task13", content: "Testing" },
    task14: { id: "task14", content: "Testing" },
    task15: { id: "task15", content: "Testing" },
    task16: { id: "task16", content: "Testing" },
    task17: { id: "task17", content: "Testing" },
    task18: { id: "task18", content: "Testing" },
    task19: { id: "task19", content: "Testing" },
    task20: { id: "task20", content: "Testing" },
    task21: { id: "task21", content: "Testing" },
    task22: { id: "task22", content: "Testing" },
    task23: { id: "task23", content: "Testing" },
    task24: { id: "task24", content: "Testing" },
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
        "task11",
        "task12",
        "task13",
        "task14",
        "task15",
        "task16",
        "task17",
        "task18",
        "task19",
        "task20",
        "task21",
        "task22",
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
