"use client";

import { useState } from "react";

export default function Home() {
  return <Grocery />;
}

const Grocery = () => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);
  return <GroceryList value={value} onChange={onChange} />;
};

const GroceryList = ({ value, onChange }) => {
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
            <button className="bg-[#07b6d5] text-[#d0f6fa] w-[100px] h-[30px] rounded-r-lg">
              Add item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
