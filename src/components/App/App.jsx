import React, { useState, useEffect } from "react";
import "./App.css";
import { parser } from "../../services/parser";
import { MapContainer } from "../Map";

/**
 * @typedef {Object} ExtinctAnimal
 * @property {string} name
 * @property {string} country
 * @property {number} year
 * @property {string} imgUrl
 */

export const App = () => {
  /**
   * @type {[ExtinctAnimal, Function]} data
   */
  const [data, setData] = useState([]);

  async function getData() {
    const parsedData = await parser();
    setData(parsedData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <MapContainer data={data} />
    </div>
  );
};
