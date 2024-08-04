import React from "react";
import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(false);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id == selected ? null : id);
  };
  const handleMultiSelection = (id) => {
    let copyMultiple = [...multiple];
    const currIdx = copyMultiple.indexOf(id);
    if (currIdx === -1) copyMultiple.push(id);
    else copyMultiple.splice(currIdx, 1);
    setMultiple(copyMultiple);
  };
  return (
    <div className="max-w-lg mx-auto">
      <button
        onClick={() => setMultiSelect(!multiSelect)}
        className="bg-blue-500 text-white px-4 py-2 mb-6"
      >
        {multiSelect ? "Single Select" : "Multi Select"}
      </button>
      {data &&
        data.map((item) => {
          const { id, question, answer } = item;
          return (
            <div key={id} className="border-b border-gray-200 p-4">
              <div
                className="cursor-pointer flex items-center justify-between"
                onClick={
                  multiSelect
                    ? () => handleMultiSelection(id)
                    : () => handleSingleSelection(id)
                }
              >
                <h3 className="text-lg font-medium">{question}</h3>
                <h3>
                  {multiSelect
                    ? multiple.indexOf(id) !== -1
                      ? "---"
                      : "++"
                    : selected === id
                    ? "---"
                    : "++"}
                </h3>
              </div>
              {multiSelect
                ? multiple.indexOf(id) !== -1 && (
                    <p className="text-gray-500 mt-2">{answer}</p>
                  )
                : selected == id && (
                    <p className="text-gray-500 mt-2">{answer}</p>
                  )}
            </div>
          );
        })}
    </div>
  );
};

export default Accordion;
