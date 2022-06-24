import React from "react";

export default function Div({ text }) {
  const [state, setState] = React.useState({
    letter: "-",
    boolean: false,
    clc: "grey",
  });
  const [showDropdown, setShowDropDown] = React.useState(false);
  const [inp, setInp] = React.useState("");

  const spanHandler = () => {
    if (state.letter === "-") {
      setState({
        letter: "Y",
        boolean: true,
        clc: "green",
        text: "green-700",
        bg: "green-100",
      });
    } else if (state.letter === "Y") {
      setState({
        letter: "N",
        boolean: false,
        clc: "red",
        text: "red-700",
        bg: "red-100",
      });
    } else {
      setState({
        letter: "-",
        boolean: false,
        clc: "grey",
      });
    }
  };

  const clickHandler = (e) => {
    let ele = e.target;
    if (ele.tagName === "P") setInp(e.target.innerHTML);
  };

  return (
    <div class="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer mb-2">
      <div class="h-full flex items-center border p-4 rounded-lg">
        <span
          className={`${state.clc} font-bold flex items-center justify-center mr-3 rounded-full h-11 w-11`}
          onClick={spanHandler}
        >
          {state.letter}
          <img
            src="https://www.svgrepo.com/show/379260/sort.svg"
            alt=""
            className="sort-icon"
          />
        </span>
        <p
          className={`text-${state.boolean ? "black" : "slate-50"} font-${
            state.boolean ? "bold" : "normal"
          }`}
        >
          {text}
        </p>
        {state.boolean && (
          <div className="flex-1 ml-3 relative">
            <input
              type="text"
              list="time"
              className="text-black border border-slate-300 p-1 px-2 w-full"
              value={inp}
              onChange={(e) => setInp(e.target.value)}
              onMouseEnter={() => {
                setShowDropDown(true);
              }}
              onMouseLeave={() => {
                setShowDropDown(false);
              }}
            />
            {showDropdown && (
              <div
                className="text-black border border-slate-200 bg-white shadow-lg absolute left-0 right-0 z-10"
                onMouseEnter={() => {
                  setShowDropDown(true);
                }}
                onMouseLeave={() => {
                  setShowDropDown(false);
                }}
                onClick={clickHandler}
              >
                <p className="p-2 pl-4 hover:bg-slate-200">12 Times in a Day</p>
                <p className="p-2 pl-4 hover:bg-slate-200">
                  12 Times in a Week
                </p>
                <p className="p-2 pl-4 hover:bg-slate-200">
                  12 Times in a Months
                </p>
                <p className="p-2 pl-4 hover:bg-slate-200">
                  12 Times in a Year
                </p>
                <p className="p-2 pl-4 hover:bg-slate-200">
                  12 Times in a 2 Years
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
