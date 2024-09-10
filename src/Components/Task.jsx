import { useState } from "react";

const Task = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleAddTask = () => {
    if (task.trim() && date) {
      onAddTask(task, date);
      setTask(""); // Clear the input fields
      setDate("");
    }
  };

  return (
    <div className="container-md">
      <h2 className="heading">Add New Task</h2>
      <div className="row g-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
};

export default Task;
