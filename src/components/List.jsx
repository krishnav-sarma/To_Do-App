import React, { useEffect, useState } from "react";
import todo_icon from "../assets/to-do.png";
import Todo from "./Todo";
import { useRef } from "react";

const List = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

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

  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  let todaysDate = new Date();
  let day = todaysDate.getDate();
  let month = todaysDate.getMonth() + 1;
  let year = todaysDate.getFullYear();
  let date = `${day}/0${month}/${year}`;

  let [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const todaysDate = new Date();
      const hours = todaysDate.getHours();
      const minutes =
        todaysDate.getMinutes() > 9
          ? todaysDate.getMinutes()
          : `0${todaysDate.getMinutes()}`;
      setTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  time = time.toString();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="relative w-11/12 max-w-md flex flex-col p-7 md:ml-[100px] ml-[5%]">
      {/* -----title----- */}
      <div className="flex gap-1 mt-[80px]">
        <img className="w-19 h-15" src={todo_icon} alt="" />
        <h1 className="text-[35px]   text-[#F2F2F2] font-[monospace]">
          <span className="flex mt-[9px]">To-Do Lis</span>
          <span className="text-[70px] mt-[-86px] ml-[166px] font-bold text-[#F59E0B] font-[monospace] flex">
            T
          </span>{" "}
        </h1>
        <p className="md:block text-[#F2F2F2] font-[monospace] text-[20px] ml-[910px] hidden ">
          Date:{date} <br />
          Time:{time}
        </p>
      </div>
      <div className=" bg-[#F59E0B] h-1 w-[170px] mt-[-30px] ml-[83.5px] flex"></div>

      {/* -----input----- */}
      <div className="flex items-center my7 bg-gray-200 rounded-full mt-4 md:w-[920px] w-[100%]">
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
          return (
            <Todo
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>

      {/* -------------------------------------------------------- */}
    </div>
  );
};

export default List;

{
}


