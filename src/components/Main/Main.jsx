import React from "react";
import Section from "./Section";
import Div from "./Div1";
import { types } from "../data";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";

export default function Main() {
  return (
    <main className="bg-[#EBEDF2] pb-8">
      <nav class="text-gray-600 body-font bg-white">
        <div class="container mx-auto flex flex-wrap p-5 py-4 flex-col sm:flex-row sm:space-y-0 space-y-5 items-center">
          <span className="bg-logo rounded-b-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </span>
          <span class="ml-3 tracking-wide text-red-900 font-bold text-xl">
            Patient Medical History
          </span>
          <nav class="md:ml-auto mr-2 flex flex-wrap items-center text-base justify-center">
            <input
              type="checkbox"
              className="mr-2 relative top-[.5px]"
              name="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" className="text-black font-medium mr-3">
              No known medical history
            </label>
          </nav>
          <button class="inline-flex items-center text-button border-2 border-button font-medium py-1 px-3 focus:outline-none hover:bg-gray-200 transition rounded text-base mt-4 md:mt-0">
            <Link to="/modal">Configure</Link>
            <IoMdSettings className="relative top-[1px] ml-2" />
          </button>
        </div>
      </nav>

      <section className="bg-white rounded-lg my-4 mx-5 shadow-md">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-8 mx-auto">
            <div class="flex flex-wrap -m-2">
              {types.map((i, index) => (
                <Div key={index} text={i} />
              ))}
            </div>
          </div>
        </section>

        <div className="border-t-2 mx-5 mb-7"></div>
        <Section type="past surgical procedures" />
        <div className="border-t-2 mx-5 mb-7"></div>
        <Section type="existing conditions" />
        <div className="border-t-2 mx-5 mb-7"></div>
        <Section type="current medications" />
      </section>
    </main>
  );
}

// https://source.unsplash.com/random
