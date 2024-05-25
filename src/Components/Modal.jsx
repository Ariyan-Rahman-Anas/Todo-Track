import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

//getting todo items from LS.
const getItemsFromLocalStorage = () => {
  let toDoItems = localStorage.getItem("items");
  if (toDoItems) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};


export const Modal = ({id, name}) => {
    const [openModal, setOpenModal] = useState(false);

    const [items, setItems] = useState(getItemsFromLocalStorage());
    // console.log(items)

    const updatingTask = () => {
      let newUpdateItem = items.find((item) => {
        return item.id === id;
      });
      // console.log(newUpdateItem);
    };


  return (
    <div className="mx-auto flex w72 items-center justify-center ">
      <CiEdit
        onClick={() => setOpenModal(true)}
        title="Edit Task"
        className="text-xl cursor-pointer hover:text-yellow-500 duration-500 "
      ></CiEdit>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-sky-900 drop-shadow-2xl sm:w-[500px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
            <RxCross2
              onClick={() => setOpenModal(false)}
              className="text-2xl mx-auto mr-0 mb-6 cursor-pointer"
            ></RxCross2>
            <h1 className="pb-8 text-4xl backdrop-blur-sm">Update the To-do</h1>
            <div className="space-y-5">
              <div className="relative">
                <input
                  id={id}
                  type="text"
                  value={name}
                  placeholder="current task"
                  className="w-full p-2 rounded-md bg-sky-200 text-black text-lg duration-300 placeholder:text-sky-700  focus:bg-sky-300 focus:outline-none "
                />
              </div>

              <div className="relative">
                <input
                  id="password_navigate_ui_modal"
                  type="text"
                  placeholder="Write new task...✍️"
                  className="w-full p-2 rounded-md bg-sky-200 text-black placeholder:text-sm text-lg duration-300 placeholder:text-sky-700  focus:bg-sky-300 focus:outline-none "
                />
              </div>
            </div>
            {/* button type will be submit for handling form submission*/}
            <button
              type="button"
              onClick={updatingTask}
              className="px-5 py-2 mt-5 font-semibold h-full rounded-md text-sky-200 bg-sky-500 hover:bg-sky-700 duration-700 "
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};