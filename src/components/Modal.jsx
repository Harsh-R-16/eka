import React from "react";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { types } from "./data";
import { Link } from "react-router-dom";

export default function Modal() {
  return (
    <main className="bg-slate-50 min-h-screen relative p-4">
      <h1 className="flex items-center font-bold">
        <AiOutlineArrowLeft />
        <span className="ml-4">Customise medical history</span>
      </h1>
      <div className="m-4 font-bold">
        <span className="mr-4 text-blue-900 underline underline-offset-4">
          Quick Links
        </span>
        <span>Select Sections</span>
      </div>
      <p className="border border-red-900 p-2 flex items-center bg-slate-200 rounded-md">
        <FaLightbulb />
        <span className="ml-4">
          The options yo select here will be visible on pad for quick addition.
        </span>
      </p>

      <section className="border my-4 p-4">
        <h2 className="uppercase mb-4 font-bold">customise quick links</h2>
        <input type="radio" id="c" name="fav" value="c" className="mr-2 ml-6" />
        <label for="c">Conditions</label>
        <input type="radio" id="o" name="fav" value="o" className="mr-2 ml-6" />
        <label for="o">Other Allergy</label>
        <input type="radio" id="d" name="fav" value="d" className="mr-2 ml-6" />
        <label for="d">Drug Allergy</label>
        <input type="radio" id="l" name="fav" value="l" className="mr-2 ml-6" />
        <label for="l">Lifestyle Habits</label>

        <div className="border my-4 flex items-center p-2 px-4">
          <AiOutlineSearch />
          <input
            type="text"
            className="flex-1 mx-2 focus:outline-none"
            placeholder="Search here"
          />
          <button className="font-bold text-red-900">Submit</button>
        </div>
      </section>
      <section className="border-2 p-4">
        <h2 className="border-b-2 text-center pb-3 uppercase font-bold">
          selected quick links
        </h2>
        <div className="flex items-center justify-evenly flex-wrap">
          {types.map((i, index) => (
            <p
              key={index}
              className="flex items-center p-2 px-4 bg-slate-200 rounded-full m-4"
            >
              <span className="mr-2">{i}</span>
              <MdDelete />
            </p>
          ))}
        </div>
      </section>
      <footer className="absolute flex justify-between bottom-8 left-5 right-5 p-4 px-8 border-2 rounded-md bg-blue-600 text-white">
        <button>
          <Link to="/">Cancel</Link>
        </button>
        <button className="border-2 p-1 px-3 rounded-md">
          <Link to="/">Save Changes</Link>
        </button>
      </footer>
    </main>
  );
}
