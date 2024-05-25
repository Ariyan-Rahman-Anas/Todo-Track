import { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { Modal } from "./Modal";


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
  const [items, setItems] = useState(getItemsFromLocalStorage());

  const addAnItem = () => {
    if (!inputData) {
      alert("Write something");
    } else {
      const todoItemWithUniqueId = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, todoItemWithUniqueId]);
      setInputData("");
    }
  };

  //storing to do items in local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  //editing a todo item
  const editATodo = (id) => {

  };

  //deleting an items from the todo
  const deleteATodoItem = (id) => {
    const remainingItems = items.filter((item) => {
      return item?.id !== id;
    });
    setItems(remainingItems);
  };

  //deleting all items
  const deleteAllTodo = () => {
    setItems([]);
  };

  // get current year for the footer
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="min-h-screen bg-sky-950 text-gray-300 flex flex-col justify-between px-2  ">
      <div className="py-6 flex items-center justify-center">
        <div className="theChild w-full md:w-3/4 text-center ">
          {/* heading */}
          <div className="heads">
            <h1 className="text-5xl">📝</h1>
            <h2 className="text-3xl font-semibold mt-1 ">
              Add Your Task Here!
            </h2>
          </div>

          {/* add an item */}
          <div className="Add-Items mt-4 ">
            <div className="border- relative">
              <input
                type="text"
                required
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder="✍️ Write Task..."
                className="w-full p-2 rounded-md bg-sky-200 text-black text-lg duration-300 placeholder:text-sky-700  focus:bg-sky-300 focus:outline-none "
              />
              <button
                onClick={addAnItem}
                className="absolute right-0 top-0 px-4 font-semibold h-full rounded-r-md text-sky-200 bg-sky-500 hover:bg-sky-700 duration-700 "
              >
                Add Task
              </button>
            </div>
          </div>

          {/* gear up the user */}
          <div className="gear-up-message my-5">
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

          {/* showing all to do items */}
          <div className="showing-Items">
            {items?.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="bg-sky-600 md:mx-10 my-2 rounded-md px-4 py-2 flex items-center justify-between hover:bg-sky-700 duration-500 md:hover:scale-105 z-10 "
                >
                  <h1 className="text-start text-lg">{item?.name}</h1>
                  <div className="flex items-center gap-6">
                    {/* <CiEdit
                      title="Edit Task"
                      onClick={editATodo}
                      className="text-xl cursor-pointer hover:text-yellow-500 duration-500 "
                    ></CiEdit> */}
                    <button onClick={() => editATodo(item?.id)}>
                      <Modal id={item?.id} name={item.name} ></Modal>
                    </button>
                    <MdOutlineDelete
                      title="Delete Task"
                      onClick={() => deleteATodoItem(item?.id)}
                      className="text-xl cursor-pointer hover:text-rose-500 duration-500 "
                    ></MdOutlineDelete>
                  </div>
                </div>
              );
            })}
          </div>

          {/* deleting all items */}
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
      <p className="footer text-center pb-1 text-sm ">
        {`©Copy right ${currentYear} || All rights reserved by `}
        <a
          href="https://ariyanrahmananas.netlify.app/"
          target="_blank"
          className="font-semibold hover:text-sky-500 duration-500"
        >
          Ariyan Rahman Anas
        </a>
      </p>
    </div>
  );
};
export default TheTodo;