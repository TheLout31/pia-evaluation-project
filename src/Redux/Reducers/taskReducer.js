// taskReducer.js

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        id: Date.now(),
        title: action.title,
        description: action.description,
        completed: false,
      };
      return [...state, newTask];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );

    default:
      return state;
  }
};

export default taskReducer;
