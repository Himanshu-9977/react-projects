import React, { useState } from "react";

const RandomColorGen = () => {
  const [color, setColor] = useState("#000000");

  const createHexColor = (e) => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  };

  const createRGBColor = (e) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div className="mx-auto mt-16 w-[60rem] h-[30rem] flex flex-col justify-center items-center ">
      <div
        className="w-full h-[70%]"
        style={{
          backgroundColor: color,
        }}
      ></div>
      <div className="btns flex items-center justify-center gap-6 mt-5">
        <button
          onClick={createHexColor}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Create Hex Color
          </span>
        </button>
        <button
          onClick={createRGBColor}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Create RGB Color
          </span>
        </button>
      </div>
      <h2 className="mt-3 text-xl font-semibold border px-4 py-2">{color}</h2>
    </div>
  );
};

export default RandomColorGen;

