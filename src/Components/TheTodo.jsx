import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";


//getting todo items from LS.
const getItemsFromLocalStorage = () => {
    let toDoItems = localStorage.getItem("items")
    if (toDoItems) {
        return JSON.parse(localStorage.getItem("items"))
    } else {
        return [];
    }
}

const TheTodo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getItemsFromLocalStorage())

    const addAnItem = () => {
        if (!inputData) {
            alert("Write something")
        } else {
             setItems([...items, inputData]);
             setInputData("");
        }
       
    }

    //deleting an items from the todo
    const deleteATodoItem = (id) => {
        const remainingItems = items.filter((item, ind) => {
          return ind !== id;
        });
        setItems(remainingItems);
    }

    //deleting all items
    const deleteAllTodo = () => {
        setItems([])
    }

    //storing to do items in local storage
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    },[items])


  return (
    <div className="min-h-screen px-2 py-6 flex items-center justify-center bg-sky-950 text-gray-300 ">
      <div className="theChild w-full md:w-3/4 text-center ">
        <div>
          <h1 className="text-5xl">📝</h1>
          <h2 className="text-3xl font-semibold mt-1 ">Add Your Task Here!</h2>
        </div>

        <div className="Add-Items mt-4 ">
          <div className="border- relative">
            <input
              type="text"
              required
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder="✍️ Add items..."
              className="w-full p-2 rounded-md bg-sky-200 text-black text-lg duration-300 placeholder:text-sky-700  focus:bg-sky-300 focus:outline-none  "
            />
            <button
              onClick={addAnItem}
              className="absolute right-0 top-0 px-4 font-semibold h-full rounded-r-md text-sky-200 bg-sky-500 hover:bg-sky-700 duration-700 "
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="my-5">
          {items?.length >= 1 ? (
            <p>
              💪
              <p className="font-semibold">{`Don't be lazy!`}</p> You have{" "}
              {items.length} items of work.
            </p>
          ) : (
            <p>
              {`You don't have any work yet.`}
              <p className="font-semibold">So, take a rest!</p>
              😊
            </p>
          )}
        </div>

        <div className="showing-Items">
          {items?.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-sky-600 md:mx-10 my-2 rounded-md px-4 py-2 flex items-center justify-between hover:bg-sky-700 duration-500 md:hover:scale-105 "
              >
                <h1 className="text-start text-lg">{item}</h1>
                <div className="flex items-center gap-6">
                  <CiEdit
                    title="Edit Task"
                    className="text-xl cursor-pointer hover:text-yellow-500 duration-500 "
                  ></CiEdit>
                  <MdOutlineDelete
                    title="Delete Task"
                    onClick={() => deleteATodoItem(index)}
                    className="text-xl cursor-pointer hover:text-rose-500 duration-500 "
                  ></MdOutlineDelete>
                </div>
              </div>
            );
          })}
        </div>

        {items?.length >= 2 && (
          <button
            onClick={deleteAllTodo}
            className="mt-5 px-5 py-2 font-semibold h-full rounded-md text-sky-200 bg-rose-700 hover:bg-rose-600 duration-700 "
          >
            Delete All
          </button>
        )}
      </div>
    </div>
  );
};
export default TheTodo;