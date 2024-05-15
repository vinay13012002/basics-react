import React, { useState, useEffect } from "react";

export default function Cart({ dataStore }) {
  console.log(dataStore, "dataSend");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(dataStore.map((item) => ({ ...item, quantity: 1 })));
  }, [dataStore]);

  const removeitem = (id) => {
    setCart(cart.filter((itm) => itm.id !== id));
  };

  const increase = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const totalSum = cart.reduce(
    (totalprice, item) => totalprice + Number(item.price) * item.quantity,
    0
  );
  // const finalPrice=totalSum.slice(0, 6);
  return (
    <div className="container">
      <h1 className="text-5xl text-red-600 mb-6">
        {cart.length} Items in your cart
      </h1>

      <div className="flex gap-4 flex-wrap">
        {cart.map((itm) => (
          <div className="cart-card" key={itm.id}>
            <div className="flex h-full flex-col gap-4 p-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-fill w-full h-auto md:h-48 md:w-48 ml-3 rounded-3xl"
                src={itm.image}
                alt="cart-img"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {itm.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  price :: $ {itm.price}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  rating :: {itm.rating.rate}
                </p>
                <div className="quantities flex items-center gap-3">
                  <span className="text-gray-700 dark:text-gray-400 text-lg ">
                    quantities :: {itm.quantity}
                  </span>
                  <div className="flex flex-col gap-2">
                    <span
                      onClick={() => decrease(itm.id)}
                      className="text-[#FFF] bg-slate-600 w-5 h-5 flex justify-center items-center cursor-pointer"
                    >
                      -
                    </span>
                    <span
                      onClick={() => increase(itm.id)}
                      className="text-[#FFF] bg-slate-600 w-5 h-5 flex justify-center items-center cursor-pointer"
                    >
                      +
                    </span>
                  </div>
                  <button
                    onClick={() => removeitem(itm.id)}
                    className="bg-purple-500 p-1 rounded-lg border-none ml-auto"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h5 className="text-lg m-3">
        Total price ::{" "}
        <span className="bg-green-500 rounded-xl p-3">
          $ {totalSum.toFixed(2)}
        </span>
      </h5>
    </div>
  );
}
