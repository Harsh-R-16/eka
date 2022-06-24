import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineFieldTime, AiFillDelete } from "react-icons/ai";

export default function Div2({ text, deleteHandler, index }) {
  const [time, setTime] = React.useState("");
  const [active, setActive] = React.useState("");
  const [showTime, setShowTime] = React.useState(false);
  const [showActive, setShowActive] = React.useState(false);

  const timeHandler = (e) => {
    let ele = e.target;
    console.log(ele);
    if (ele.tagName === "P") {
      setTime(ele.innerHTML);
    }
  };

  const activeHandler = (e) => {
    let ele = e.target;
    console.log(ele);
    if (ele.tagName === "P") {
      setActive(ele.innerHTML);
    }
  };

  return (
    <div className="flex mb-4 flex-wrap">
      <p className="w-full sm:w-1/2 md:w-1/4 border flex items-center p-4 capitalize">
        <GiHamburgerMenu /> <span className="ml-4 font-medium">{text}</span>
      </p>

      <p
        className="relative w-full sm:w-1/2 md:w-1/4  border  flex items-center p-4 font-medium capitalize"
        onMouseEnter={() => {
          setShowTime(true);
        }}
        onMouseLeave={() => {
          setShowTime(false);
        }}
      >
        <AiOutlineFieldTime />
        <input
          type="text"
          list="times"
          className="ml-2 p-1 flex-1 focus:outline-none"
          placeholder="Since"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        {showTime && (
          <div
            className="border cursor-pointer border-slate-200 bg-white shadow-lg absolute left-0 right-0 z-10 top-[65px]"
            onMouseEnter={() => {
              setShowTime(true);
            }}
            onMouseLeave={() => {
              setShowTime(false);
            }}
            onClick={timeHandler}
          >
            <p className="p-2 pl-4 hover:bg-slate-200 font-normal">2 Hours</p>
            <p className="p-2 pl-4 hover:bg-slate-200 font-normal">2 Days</p>
            <p className="p-2 pl-4 hover:bg-slate-200 font-normal">2 Weeks</p>
            <p className="p-2 pl-4 hover:bg-slate-200 font-normal">2 Months</p>
            <p className="p-2 pl-4 hover:bg-slate-200 font-normal">2 Years</p>
          </div>
        )}
      </p>

      <p
        className="relative w-full sm:w-1/2 md:w-1/4 border  flex items-center p-4 font-medium capitalize"
        onMouseEnter={() => {
          setShowActive(true);
        }}
        onMouseLeave={() => {
          setShowActive(false);
        }}
      >
        <GiHamburgerMenu />
        <input
          type="text"
          className="ml-2 p-1 flex-1 focus:outline-none"
          placeholder="None"
          value={active}
          onChange={(e) => setActive(e.target.value)}
        />
        {showActive && (
          <div
            className="border cursor-pointer border-slate-200 bg-white shadow-lg absolute left-0 right-0 z-10 top-[65px]"
            onMouseEnter={() => {
              setShowActive(true);
            }}
            onMouseLeave={() => {
              setShowActive(false);
            }}
            onClick={activeHandler}
          >
            <p className="p-2 pl-4 hover:bg-slate-200 font-normal">None</p>
            <p className="p-2 pl-4 hover:bg-slate-200 font-normal">Active</p>
            <p className="p-2 pl-4 hover:bg-slate-200 font-normal">Inactive</p>
          </div>
        )}
      </p>

      <p className="w-full sm:w-1/2 md:w-1/4  border flex items-center p-4 font-medium capitalize">
        <span id={index} onClick={deleteHandler}>
          <AiFillDelete />
        </span>
        <input
          type="text"
          className="ml-2 p-1 flex-1 focus:outline-none"
          placeholder="Add notes here!!!"
        />
      </p>
    </div>
  );
}
