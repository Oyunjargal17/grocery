"use client";

import { useState } from "react";

let listIndex = 0;

export default function Home() {
  return <Grocery />;
}

// const Grocery = () => {
//   const [value, setValue] = useState("");
//   const [list, setList] = useState([]);
//   const [notification, setNotification] = useState("");

//   const onChange = (event) => {
//     setValue(event.target.value);
//   };

//   const add = () => {
//     if (!value.trim()) {
//       showNotification("Текстээ оруулна уу!");
//       return;
//     }

//     setList([
//       ...list,
//       {
//         id: listIndex++,
//         text: value,
//         completed: false,
//       },
//     ]);
//     showNotification("Амжилттай нэмэгдлээ ✅");
//     setValue("");
//   };
//   const deleted = (id) => {
//     const newDelete = list.filter((item) => item.id !== id);
//     setList(newDelete);
//     showNotification("Амжилттай устгалаа ❌");
//   };
//   const toggleCompleted = (id) => {
//     const newList = list.map((item) =>
//       item.id === id ? { ...item, completed: !item.completed } : item
//     );
//     setList(newList);
//   };

//   const showNotification = (message) => {
//     setNotification(message);

//     setTimeout(() => {
//       setNotification("");
//     }, 2000);
//   };

//   return (
//     <GroceryList
//       value={value}
//       onChange={onChange}
//       add={add}
//       list={list}
//       deleted={deleted}
//       toggleCompleted={toggleCompleted}
//       notification={notification}
//     />
//   );
// };

// const GroceryList = ({
//   value,
//   onChange,
//   add,
//   list,
//   deleted,
//   toggleCompleted,
//   notification,
// }) => {
//   return (
//     <div className=" h-screen  bg-[#f9fafc]">
//       {notification && (
//         <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-100 text-green-600 px-6 py-3 rounded-lg shadow-lg z-50">
//           {notification}
//         </div>
//       )}
//       <div className="flex justify-center">
//         <div className="bg-[#ffffff] w-150 mt-50 flex flex-col justify-center items-center p-8 rounded-xl shadow-md">
//           <h1 className="text-3xl mb-4">Grocery Bud</h1>
//           <div className="px-4 py-2">
//             <input
//               value={value}
//               onChange={onChange}
//               className="border border-gray-300 w-[300px] h-[30px]"
//               type="text"
//             />
//             <button
//               onClick={add}
//               className="bg-[#07b6d5] text-[#d0f6fa] w-[100px] h-[30px] rounded-r-lg"
//             >
//               Add item
//             </button>
//             <ul>
//               {list.map((item) => (
//                 <li key={item.id} className="flex justify-between">
//                   <div className="flex gap-2 mt-2">
//                     <input
//                       type="checkbox"
//                       checked={item.completed}
//                       onChange={() => toggleCompleted(item.id)}
//                     />
//                     <span
//                       className={
//                         item.completed ? "line-through text-gray-400" : ""
//                       }
//                     >
//                       {item.text}
//                     </span>
//                   </div>

//                   <button
//                     onClick={() => deleted(item.id)}
//                     className="bg-black text-white w-12.5 h-6.25 mt-2 rounded-sm text-xs"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Grocery = () => {
//   const [value, setValue] = useState("");
//   const [items, setItems] = useState([]);
//   const add = () => {
//     setItems([...items, value]);
//     setValue("");
//   };

//   return (
//     <div>
//       <div className="min-h-screen flex flex-col justify-center items-center">
//         <h1>Grocery Bud</h1>
//         <div>
//           <input
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             className="border border-gray-700"
//             type="text"
//           />
//           <button className="bg-gray-300" onClick={add}>
//             Add
//           </button>
//           <ul className="mt-4">
//             {items.map((item, index) => (
//               <li key={index}> {item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

const Grocery = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div>
        <h1>Grocery Bud</h1>
        <div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
          <button className=" bg-gray-200">Add</button>
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};
