import { useState } from "react";

const dataList = [
  "value1",
  "AKKADummyValue",
  "alalaDummyValue",
  "0010101DummyValue",
  "99393DummyValue",
  "101001DummyValue",
  "010laDummyValue",
];

const LiveSearch = () => {
  const [input, setInput] = useState("");

  const filteredData = dataList.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ul>
          {filteredData.length > 0
            ? filteredData.map((item, index) => <li key={index}>{item}</li>)
            : "No data avaialable"}
        </ul>
      </div>
    </div>
  );
};

export default LiveSearch;
