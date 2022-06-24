import React from "react";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { types } from "../data";
import { Link } from "react-router-dom";

export default function Modal() {
  const [inp, setInp] = React.useState("");
  const [data, setData] = React.useState(types);

  const deleteHandler = (e) => {
    let newData = [...data];
    newData.splice(+e.target.id, 1);
    setData(newData);
  };

  const submitHandler = (e) => {
    inp.trim() && setData([...data, inp.toUpperCase()]);
    setInp("");
  };

  return (
    <main className="bg-[#EBEDF2] min-h-screen relative p-4 pb-24">
      <h1 className="flex items-center font-bold">
        <Link to="/">
          <AiOutlineArrowLeft />
        </Link>
        <span className="ml-4 capitalize">Customise medical history</span>
      </h1>
      <div className="font-bold border p-3 px-4 my-3 bg-white rounded-lg">
        <span className="mr-5 text-blue-900 underline underline-offset-[6px]">
          Quick Links
        </span>
        <span>Select Sections</span>
      </div>
      <p className="border border-red-900 p-2 flex items-center bg-[#FFFAEF] rounded-md">
        <FaLightbulb className="text-[#75632C]" />
        <span className="ml-3">
          The options you select here will be visible on pad for quick addition.
        </span>
      </p>

      <section className="bg-white flex flex-wrap my-5 rounded-lg">
        <div className="my-4 p-4 w-full md:w-1/2">
          <h2 className="uppercase mb-4 font-medium">customise quick links</h2>
          <section className="flex flex-wrap gap-5">
            <div>
              <input
                type="radio"
                id="c"
                name="fav"
                value="c"
                className="mr-1"
              />
              <label for="c">Conditions</label>
            </div>

            <div>
              <input
                type="radio"
                id="o"
                name="fav"
                value="o"
                className="mr-1"
              />
              <label for="o">Other Allergy</label>
            </div>

            <div>
              <input
                type="radio"
                id="d"
                name="fav"
                value="d"
                className="mr-1"
              />
              <label for="d">Drug Allergy</label>
            </div>

            <div>
              <input
                type="radio"
                id="l"
                name="fav"
                value="l"
                className="mr-1"
              />
              <label for="l">Lifestyle Habits</label>
            </div>
          </section>

          <div className="my-4 flex items-center p-2 px-4 rounded bg-[#EBEDF2]">
            <AiOutlineSearch />
            <input
              type="text"
              className="flex-1 mx-2 focus:outline-none bg-inherit"
              placeholder="Search here"
              value={inp}
              onChange={(e) => setInp(e.target.value)}
            />
            <button onClick={submitHandler}>Submit</button>
          </div>
        </div>
        <div className="border-t-2 md:border-t-0 md:border-l-2 p-4 w-full md:w-1/2">
          <h2 className="border p-2 text-center uppercase font-medium rounded-lg">
            selected quick links
          </h2>
          <div className="flex items-center flex-wrap py-2">
            {data.map((i, index) => (
              <p
                key={index}
                className="text-sm flex items-center p-2 px-4 border border-red-400 text-red-800 rounded-full m-1 mt-[8px]"
              >
                <span className="mr-2">{i}</span>
                <span
                  id={index}
                  onClick={deleteHandler}
                  className="cursor-pointer"
                >
                  <MdDelete />
                </span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <footer className="absolute flex justify-between bottom-8 left-4 right-4 p-4 px-8 border-2 rounded-md bg-blue-800 text-white">
        <button>
          <Link to="/">Cancel</Link>
        </button>
        <button className="flex items-center border-2 p-1 px-3 rounded-md">
          <BsArrowRightShort className="text-2xl mr-2" />
          <Link to="/">Save Changes</Link>
        </button>
      </footer>
    </main>
  );
}
