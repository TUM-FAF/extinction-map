import React, { useState, useEffect } from "react";
import "./App.css";
// import { parser } from "../../services/parser";
import { MapContainer } from '../Map';

export const App = () => {
  const [data, setData] = useState(null);

  async function getData() {
    // const parsedData = await parser();
    // setData(parsedData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <MapContainer />
    </div>
  );
};
