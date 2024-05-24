import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

const TheTodo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([])

    const addAnItem = () => {
        if (!inputData) {
            alert("Write something")
        } else {
             setItems([...items, inputData]);
             setInputData("");
        }
       
    }
    // console.log(items);

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-800 text-gray-300 ">
      <div className="theChild w-full text-center ">
        <div>
          <h1 className="text-5xl">📝</h1>
          <p>Add Your Task Here!</p>
        </div>

        <div className="Add-Items">
          <div className=" relative">
            <input
              type="text"
              required
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder="✍️ Add items..."
              className="w-full p-2 rounded-md bg-gray-300 text-white duration-300 placeholder:text-gray-500  focus:bg-gray-600 focus:outline-none  "
            />
            <button
              onClick={addAnItem}
              className="absolute right-0 top-0 px-4 py-2 rounded-r-md text-gray-200 bg-gray-400 hover:bg-gray-500 duration-500 "
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="showing-Items">
          {items?.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-teal-800 m-2 rounded-md px-4 py-2 flex items-center justify-between "
              >
                <h1 className="text-start">{item}</h1>
                <div className="flex items-center gap-6">
                  <CiEdit title="Edit Task" className="text-xl"></CiEdit>
                  <MdOutlineDelete
                    title="Delete Task"
                    className="text-xl"
                  ></MdOutlineDelete>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheTodo;
