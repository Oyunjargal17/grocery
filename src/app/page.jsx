"use client";

import { useState } from "react";

let listIndex = 0;

export default function Home() {
  return <Grocery />;
}

const Grocery = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const add = () => {
    const newList = [
      ...list,
      {
        id: listIndex++,
        text: value,
      },
    ];
    setList(newList);
  };
  return (
    <GroceryList value={value} onChange={onChange} add={add} list={list} />
  );
};

const GroceryList = ({ value, onChange, add, list }) => {
  const deleted = () => {};
  return (
    <div className=" h-screen  bg-[#f9fafc]">
      <div className="flex justify-center">
        <div className="bg-[#ffffff] w-150 mt-50 flex flex-col justify-center items-center p-8 rounded-xl shadow-md">
          <h1 className="text-3xl mb-4">Grocery Bud</h1>
          <div className="px-4 py-2">
            <input
              value={value}
              onChange={onChange}
              className="border border-gray-300 w-[300px] h-[30px]"
              type="text"
            />
            <button
              onClick={add}
              className="bg-[#07b6d5] text-[#d0f6fa] w-[100px] h-[30px] rounded-r-lg"
            >
              Add item
            </button>
            <ul>
              {list.map((item) => {
                return (
                  <div className="flex justify-between">
                    <li key={item.id}>{item.text}</li>
                    <button className="bg-black text-white w-12.5 h-6.25 mt-2 rounded-sm text-xs">
                      Delete
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
