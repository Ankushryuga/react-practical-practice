import { useState } from "react";
const ToDoList = () => {
  const [availableTask, setAvailableTask] = useState([]);
  const [input, setInput] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleAddNew = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        taskName: input,
      };
      setAvailableTask((prev) => [...prev, newTask]);
      setInput("");
    }
  };

  const handleEdit = (id) => {
    const taskToEdit = availableTask.find((task) => task.id === id);
    setEditTaskId(id);
    setEditInput(taskToEdit.taskName);
  };

  const handleSave = (id) => {
    setAvailableTask((prev) =>
      prev.map((task) =>
        task.id === id ? { ...prev, taskName: editInput } : task
      )
    );
    setEditTaskId(null);
    setEditInput("");
  };

  const handleDelete = (id) => {
    setAvailableTask((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleAddNew}>Add New</button>
      <div>
        {availableTask.length !== 0
          ? availableTask.map((task) => (
              <div key={task.id} className="todocontent">
                {editTaskId === task.id ? (
                  <input
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                  ></input>
                ) : (
                  <input type="text" value={task.taskName} disabled></input>
                )}
                {editTaskId === task.id ? (
                  <button onClick={() => handleSave(task.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(task.id)}>Edit</button>
                )}
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            ))
          : "No to do list available"}
      </div>
    </div>
  );
};

export default ToDoList;
