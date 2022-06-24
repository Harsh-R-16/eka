import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineFieldTime,
  AiFillDelete,
  AiOutlineSearch,
} from "react-icons/ai";

export default function Section({ type }) {
  const [inp, setInp] = React.useState("");
  const [data, setData] = React.useState(["Sailor's Skin", "Temp"]);
  const [show, setShow] = React.useState(true);

  const clickHandler = (e) => {
    setShow(!show);
    if (e.target.innerHTML === "V") e.target.innerHTML = "X";
    else e.target.innerHTML = "V";
  };

  const submitHandler = (e) => {
    inp.trim() && setData((data) => [...data, inp]);
    setInp("");
  };

  return (
    <section className="p-5 border">
      <div>
        <h2 className="mb-8 font-bold uppercase tracking-wide">
          <span
            className="bg-blue-300 cursor-pointer text-blue-700 mr-3 px-3 py-2 rounded-full h-10 w-10"
            onClick={clickHandler}
          >
            X
          </span>
          {type}
        </h2>
      </div>

      <article>
        {show &&
          data.map((i, index) => (
            <div className="flex mb-5" key={index}>
              <p className="w-1/4 border  flex items-center p-4 font-bold capitalize">
                <GiHamburgerMenu /> <span className="ml-4">{i}</span>
              </p>
              <p className="w-1/4 border  flex items-center p-4 font-bold capitalize">
                <AiOutlineFieldTime />
                <input
                  type="text"
                  list="times"
                  className="ml-2 p-1 flex-1 placeholder:text-black"
                  placeholder="12 Hours"
                  onClick={(e) => (e.target.placeholder = "")}
                />
                <datalist id="times">
                  <option value="12 Hour" />
                  <option value="8 Hour" />
                  <option value="6 Hour" />
                  <option value="4 Hour" />
                  <option value="2 Hour" />
                </datalist>
              </p>
              <p className="w-1/4 border  flex items-center p-4 font-bold capitalize">
                <GiHamburgerMenu />
                <input
                  type="text"
                  list="active"
                  className="ml-2 p-1 flex-1 placeholder:text-black"
                  placeholder="Active"
                  onClick={(e) => (e.target.placeholder = "")}
                />
                <datalist id="active">
                  <option value="Active" />
                  <option value="Inactive" />
                  <option value="None" />
                </datalist>
              </p>
              <p className="w-1/4 border  flex items-center p-4 font-bold capitalize">
                <AiFillDelete /> <span className="ml-4">This is Remarks</span>
              </p>
            </div>
          ))}
        <div className="border my-4 flex items-center p-2 px-4">
          <AiOutlineSearch />
          <input
            type="text"
            className="flex-1 mx-2 focus:outline-none"
            placeholder="Search here"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
          />
          <button className="font-bold text-red-900" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </article>
    </section>
  );
}
