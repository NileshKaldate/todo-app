import React, { useState } from "react";
import TodoFormModal from "./TodoFormModal";

const Table = () => {
  const [todo, setTodo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Add Todo");
  const [data, setData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const isSearch =
    search.length > 1
      ? todo?.filter((item) => {
          return item?.name?.includes(search);
        })
      : todo;
  const todoData = isSearch?.slice(page * 5, (page + 1) * 5);

  return (
    <div className="h-[650px] w-[80%] shadow-2xl px-8 py-4 bg-white rounded relative">
      <div className="flex justify-between">
        <div>
          <input
            placeholder="Search todo"
            className="border border-black rounded px-2 py-1"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <button
          className="bg-[#3881c5] rounded py-1 px-4 text-lg text-white font-bold"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
            setTitle("Add Todo");
            setData({});
            setIsEdit(false);
          }}
        >
          Add todo
        </button>
      </div>
      <table className="w-full rounded mt-8 text-base">
        <thead className="bg-blue-100 rounded">
          <tr className="text-left pl-2 w-full ">
            <th className="pl-4 w-[40%] py-2">Name</th>
            <th className="w-[20%]">Creation Date</th>
            <th className="w-[20%] text-center">Age</th>
            <th className="w-[10%]"></th>
            <th className="w-[10%]"></th>
          </tr>
        </thead>
        <tbody>
          {todoData?.map((item) => {
            return (
              <tr key={item.id}>
                <td className=" pl-4 py-8 border-b">{item.name}</td>
                <td className="border-b">
                  {new Date(item.creationDate).toLocaleString()}
                </td>
                <td className="border-b text-center">
                  {new Date(item.age).toLocaleDateString()}
                </td>
                <td className="border-b text-center">
                  <button
                    className="bg-orange-400 rounded px-2 py-1 text-base text-white "
                    onClick={() => {
                      setIsOpen(true);
                      setTitle("Edit Todo");
                      setData(item);
                      setIsEdit(true);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td className="border-b text-center">
                  <button
                    className="bg-red-600 rounded-sm px-2 py-1 text-base text-white font-bold"
                    onClick={() => {
                      setTodo(
                        todo?.filter((i) => {
                          return i.id !== item.id;
                        })
                      );
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="absolute bottom-10 right-10 flex gap-4 items-center">
        <button
          onClick={() => {
            page > 0 ? setPage(page - 1) : setPage(page);
          }}
          className="font-bold text-2xl"
        >
          {"<"}
        </button>
        <h1 className="font-bold text-xl text-white bg-[#3881c5] px-2 rounded-[50%]">
          {page + 1}
        </h1>
        <button
          onClick={() => {
            isSearch?.slice((page + 1) * 5, (page + 2) * 5).length > 0 &&
              setPage(page + 1);
          }}
          className="font-bold text-2xl"
        >
          {">"}
        </button>
      </div>
      <TodoFormModal
        {...{ isOpen, setIsOpen, title, setTodo, todo, data, isEdit }}
      />
    </div>
  );
};

export default Table;
