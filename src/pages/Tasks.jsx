import React, { useContext, useEffect, useRef, useState } from "react";
import { TaskContext } from "../Contexts/TaskContext";
import "../Tasks.css";
import { useDispatch, useSelector } from "react-redux";
const Tasks = () => {
  // const { tasks, addTask, toggleTask } = useContext(TaskContext);
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const inputTitle = useRef();
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (data.title.trim()) {
      dispatch({
        type: "ADD_TASK",
        title: data.title,
        description: data.description,
      });
      setData({ title: "", description: "" });
    }
  };

  function completedTasks() {
    let complete = tasks.filter((t) => t.completed);
    return complete.length == 0 ? 0 : complete.length;
  }

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    inputTitle.current.focus();
  }, []);

  return (
    <div className="task-container">
      <h2>Task Manager</h2>
      <div className="task-form">
        <input
          ref={inputTitle}
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          placeholder="Enter task title"
        />
        <textarea
          name="description"
          value={data.description}
          onChange={handleChange}
          placeholder="Add description"
        />
        {data.title ? <button onClick={handleAdd}>Add Task</button> : null}
      </div>
      <div>
        <h3>
          {completedTasks()} of {tasks.length}
        </h3>
      </div>
      <div className="task-list">
        {tasks.length == 0 ? (
          <>
            <p>No tasks yet! Add one to get started.</p>
          </>
        ) : (
          tasks.map((task, idx) => (
            <div
              key={task.id}
              
              className={`task-card ${task.completed ? "completed" : ""}`}
              onClick={() => dispatch({ type: "TOGGLE_TASK", id: task.id })}
            >
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <span>{task.completed ? "✅ Done" : "🕒 Pending"}</span>
            </div>
          ))
        )}
        {}
      </div>
    </div>
  );
};

export default Tasks;
