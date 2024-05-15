import React, { useState } from "react";

export default function Card({ item, dataSend, dataStore }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    dataSend(item.id);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div class="hover:shadow-[0_0_60px_-15px_rgba(0,0,0,0.6)] shadow-md w-full h-full flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="mx-auto">
          <img
            class="p-8 rounded-t-lg h-56 w-56"
            src={item.image}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5 flex-col justify-between flex">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
          </a>
          <div class="flex items-center mt-2.5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {item.rating.rate}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              $ {item.price}
            </span>
            <button
              onClick={handleClick}
              class=" text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {dataStore && dataStore.includes(item)
                ? `Added to cart`
                : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
