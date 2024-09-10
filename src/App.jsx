import { useState } from "react";
import Greeting from "./Components/Greeting";
import Task from "./Components/Task";
import ListItems from "./Components/ListItems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [listItem, setListItem] = useState([]); // Task list state
  const [showInput, setShowInput] = useState(false); // State to toggle task input
  const [showTasks, setShowTasks] = useState(false); // State to toggle task view

  const addTask = (task, date) => {
    setListItem([...listItem, { task, date }]);
  };

  const toggleInput = () => {
    setShowInput(true);
    setShowTasks(false);
  };

  const toggleTasks = () => {
    setShowTasks(true);
    setShowInput(false);
  };

  const onBtnClicked = (index) => {
    const updatedItems = listItem.filter((_, i) => i !== index);
    setListItem(updatedItems);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="buttonContainer">
          <button className="btn btn-primary" onClick={toggleInput}>
            Add Task
          </button>
          <button className="btn btn-secondary" onClick={toggleTasks}>
            View Tasks
          </button>
        </div>

        {showInput && <Task onAddTask={addTask} />}
        {showTasks && listItem.length > 0 ? (
          <ListItems items={listItem} onBtnClick={onBtnClicked} />
        ) : showTasks && listItem.length === 0 ? (
          <Greeting />
        ) : null}
      </div>
    </>
  );
}

export default App;
