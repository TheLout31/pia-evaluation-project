import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        alignItems: "center",
      }}
    >
      <h1>Welcome to the Task Manager App</h1>
      <p>This app helps you manage your daily tasks efficiently.</p>
      <Link to="/tasks">
        <button>Go to Tasks</button>
      </Link>
    </div>
  );
};

export default Welcome;
