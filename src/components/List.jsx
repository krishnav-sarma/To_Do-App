import React, { useState } from "react";
import todo_icon from "../assets/to-do.png";
import Todo from "./Todo";
import { useRef } from "react";

const List = () => {
  const [todoList, setTodoList] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  return (
    <div className=" w-11/12 max-w-md flex flex-col p-7  ml-[100px] min-h-[550px]">
      {/* -----title----- */}
      <div className="flex gap-1 mt-[80px]">
        <img className="w-19 h-15" src={todo_icon} alt="" />
        <h1 className="text-[35px]   text-[#F2F2F2] font-[monospace]">
          <span className="flex mt-[9px]">To-Do Lis</span>
          <span className="text-[70px] mt-[-86px] ml-[166px] font-bold text-[#F59E0B] font-[monospace] flex">
            T
          </span>{" "}
        </h1>
      </div>
      <div className=" bg-[#F59E0B] h-1 w-[170px] mt-[-30px] ml-[99.5px] flex"></div>

      {/* -----input----- */}
      <div className="flex items-center my7 bg-gray-200 rounded-full mt-4 w-[635px]">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-12  pl-6 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-3 rounded-full w-33 h-12 text-lg font-medium text-[#F2F2F2] cursor-pointer bg-[#111827]"
        >
          ADD +
        </button>
      </div>

      {/* -----todo list----- */}
      <div>
        {todoList.map((item, index) => {
          return <Todo key={index} text={item.text} />;
        })}
      </div>

      {/* ---------- */}
    </div>
  );
};

export default List;

{
  /* <span className='text-[55px] text-[#F59E0B] font-[monospace] ml-2'>T</span> */
}
// className='bg-[#F5F5F5] place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'
