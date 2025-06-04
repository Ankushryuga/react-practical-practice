import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/slice";
const Tasks = () => {
  const [input, setInput] = useState("");
  const dispath = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="inputid"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Tasks;
