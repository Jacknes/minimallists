const initialData = {
  items: [
    { id: "item-1", value: "Carrots", type: "plain" },
    { id: "item-2", value: "Spinach", type: "plain" },
    { id: "item-3", value: "Potatoes", type: "plain" },
    { id: "item-4", value: "Milk", type: "plain" }
  ],
  columns: {
    "column-1": {
      id: "column-1",
      title: "Shopping",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    }
  },
  columnOrder: ["column-1"]
};

export default initialData;
