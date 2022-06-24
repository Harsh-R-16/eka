import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { AiOutlineDownSquare, AiOutlineUpSquare } from "react-icons/ai";
import Div from "./Div2";
import { arr } from "../data";

export default function Section({ type }) {
  const [inp, setInp] = React.useState("");
  const [data, setData] = React.useState(["Sailor's Skin", "Temp"]);
  const [show, setShow] = React.useState(false);
  const [showDropdown, setShowDropDown] = React.useState(false);

  const submitHandler = () => {
    inp.trim() && setData((data) => [...data, inp]);
    setInp("");
  };

  const deleteHandler = (e) => {
    let newData = [...data];
    console.log(e.currentTarget.id);
    newData.splice(+e.currentTarget.id, 1);
    setData(newData);
  };

  return (
    <section className="p-5 pt-1">
      <div>
        <h2 className="mb-8 flex items-center text-slate-700 font-medium uppercase tracking-wide">
          {!show && (
            <MdKeyboardArrowDown
              className="bg-blue-300 cursor-pointer text-blue-700 mr-3 rounded-full h-8 w-8 p-1"
              onClick={() => setShow(!show)}
            />
          )}
          {show && (
            <MdKeyboardArrowUp
              className="bg-blue-300 cursor-pointer text-blue-700 mr-3 rounded-full h-8 w-8 p-1"
              onClick={() => setShow(!show)}
            />
          )}
          {type}
        </h2>
      </div>

      <article>
        {show &&
          data.map((i, index) => (
            <Div
              key={index}
              text={i}
              deleteHandler={deleteHandler}
              index={index}
            />
          ))}
        <div
          className="relative border my-4 flex items-center p-2 px-4 rounded-md"
          onMouseEnter={() => setShowDropDown(true)}
          onMouseLeave={() => setShowDropDown(false)}
        >
          <AiOutlineSearch />
          <input
            type="text"
            className="flex-1 mx-2 focus:outline-none"
            placeholder="Search here"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
          <button
            className="font-medium text-slate-700"
            onClick={submitHandler}
          >
            Submit
          </button>
          {showDropdown && (
            <div
              className="text-black border border-slate-200
              max-h-96 overflow-y-scroll
              bg-white shadow-lg absolute left-0 right-0 z-10 top-10"
              onMouseEnter={() => setShowDropDown(true)}
              onMouseLeave={() => setShowDropDown(false)}
            >
              {showDropdown &&
                [...arr, ...arr].map((i, index) => (
                  <p
                    key={index}
                    onClick={() => setInp(i)}
                    className="flex items-center p-3 px-4 hover:bg-slate-200"
                  >
                    <FaHandshake className="text-blue-700 border border-blue-400 rounded-full p-[4px] text-3xl" />
                    <span className="ml-3 flex-1">{i}</span>
                    <span className="flex items-center">
                      <AiOutlineUpSquare className="ml-4 mr-1 translate-y-[1px]" />{" "}
                      Up
                      <AiOutlineDownSquare className="ml-4 mr-1 translate-y-[1px]" />
                      Down
                      <BiSelectMultiple className="ml-4 mr-1 translate-y-[1px]" />
                      Select
                    </span>
                  </p>
                ))}
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
