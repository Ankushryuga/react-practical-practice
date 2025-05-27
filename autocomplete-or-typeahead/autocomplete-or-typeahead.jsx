import { use, useEffect, useState } from "react";
import "./styles.css";

const API_URL = "https://dummyjson.com/recipes/search?q=";

export default function App() {
  //state variables.
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  //fetching data from api..
  const fetchData = async () => {
    //caching..
    if (cache[input]) {
      setResults(cache[input]);
      return;
    }
    //if cache is not available..
    const response = await fetch(API_URL + input);
    const responseJsonFormat = await response.json();
    setResults(responseJsonFormat?.recipes);
    setCache((prev) => ({ ...prev, [input]: responseJsonFormat?.recipes }));
  };

  //useeffects..
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  //return.
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        className="autoInput"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />

      {showResults && (
        <div className="autoInputDiv">
          {results.map((r) => (
            <span className="result" key={r.id}>
              {r.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
