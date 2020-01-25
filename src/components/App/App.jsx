import React, { useState, useEffect } from "react";
import "./App.css";
import { parser } from "../../services/parser";

export const App = () => {
  const [data, setData] = useState(null);

  async function getData() {
    const parsedData = await parser();
    setData(parsedData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {data ? data.map(el => <p key={el.name}>{el.name}</p>) : <h1>No data</h1>}
    </div>
  );
};
