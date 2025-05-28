import { useState } from "react";
const ToDoList = () => {
  const [taskInformations, setTaskInformations] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddNew = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        taskName: inputValue,
      };
      setTaskInformations((prev) => [...prev, newTask]);
      setInputValue("");
    }
  };
  const handleEdit = () => {};

  const handleDelete = () => {};
  return (
    <div className="todoList">
      <div className="header">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button onClick={handleAddNew}>Add New</button>
        {taskInformations.length === 0 ? (
          <p>No New ToDO Added</p>
        ) : (
          taskInformations.map((task) => (
            <div key={task.id} className="maincontent">
              <p>{task.taskName}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoList;
