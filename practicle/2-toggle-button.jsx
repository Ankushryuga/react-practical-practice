import { useState } from "react";

const ToggleVisiblity = ({ ToggleValue }) => {
  const [visible, setVisible] = useState(false);
  const dropdown = [];
  //   const dropdown = ["Value1", "Value2", "Value3", "Value4", "Value5", "Value6"];
  return (
    <>
      <div className="toggle-switch">
        <button onClick={(e) => setVisible((prev) => !prev)}>
          {visible ? "Hide" : "Show"}
        </button>
        {visible && (
          <ul>
            {dropdown.length !== 0
              ? dropdown.map((e) => <li key={e}>{e}</li>)
              : "List is empty"}
          </ul>
        )}
      </div>
    </>
  );
};

export default ToggleVisiblity;
