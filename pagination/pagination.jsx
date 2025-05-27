import { useEffect, useState } from "react";
import "./styles.css";

const API_URL = "https://dummyjson.com/products?limit=500";

const Products = ({ image, title }) => {
  return (
    <div className="card">
      <img className="product-img" src={image} title={title} />
      <span>{title}</span>
    </div>
  );
};

const pageSize = 10;

export default function App() {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const responseJsonFormat = await response.json();
    setResults(responseJsonFormat?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalResults = results.length;
  const numberOfPages = Math.ceil(totalResults / pageSize);
  let start = currentPage * pageSize;
  let end = start + pageSize;

  const goNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  //return.
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <button
          className="page-number"
          onClick={() => goPrevPage()}
          disabled={currentPage === 0 ? true : false}
        >
          Go Prev
        </button>
        {[...Array(numberOfPages).keys()].map((n) => (
          <span
            className="page-number"
            key={n}
            onClick={() => setCurrentPage(n)}
          >
            {n}
          </span>
        ))}
        <button
          className="page-number"
          onClick={() => goNextPage()}
          disabled={currentPage === numberOfPages - 1}
        >
          {" "}
          Go Next
        </button>
      </div>
      <div className="product-container">
        {results.slice(start, end).map((r) => (
          <Products key={r.id} image={r.thumbnail} title={r.title} />
        ))}
      </div>
    </div>
  );
}
