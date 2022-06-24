import React from "react";
import Section from "./Section";
import { types } from "./data";
import { Link } from "react-router-dom";

export default function Main() {
  const spanHandler = (e) => {
    let ele = e.target;
    if (ele.innerHTML === "Y") {
      ele.innerHTML = "N";
      ele.classList.replace("text-green-900", "text-red-700");
    } else {
      ele.innerHTML = "Y";
      ele.classList.replace("text-red-700", "text-green-900");
    }
  };

  return (
    <main>
      <nav class="text-gray-600 body-font border">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
          <span class="ml-3 text-red-900 font-bold text-xl">
            Patient Medical History
          </span>
          <nav class="md:ml-auto mr-2 flex flex-wrap items-center text-base justify-center">
            <input
              type="checkbox"
              className="mr-1"
              name="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox">No known medical history</label>
          </nav>
          <button class="inline-flex items-center text-blue-800 bg-gray-100 border border-blue-700 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <Link to="/modal">Configure</Link>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </nav>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap -m-2">
            {types.map((i, index) => (
              <div
                class="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer"
                key={index}
              >
                <div class="h-full flex items-center border p-4 rounded-lg">
                  <span
                    className="border-2 text-red-700 font-bold flex items-center justify-center mr-2 rounded-full h-10 w-10"
                    onClick={spanHandler}
                  >
                    N
                  </span>
                  <p>{i}</p>
                  <input
                    type="text"
                    list="time"
                    className="border ml-2 p-1 flex-1"
                  />
                  <datalist id="time">
                    <option value="12 times in a Hour" />
                    <option value="12 times in a Day" />
                    <option value="12 times in a Week" />
                    <option value="12 times in a Month" />
                    <option value="12 times in a Year" />
                  </datalist>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section type="past surgical procedures" />
      <Section type="existing conditions" />
      <Section type="current medications" />
    </main>
  );
}

// https://source.unsplash.com/random
