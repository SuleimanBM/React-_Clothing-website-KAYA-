import React from "react";
import "../styles/Home.css";
import { useState, useEffect } from "react";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import { List } from "../List/List";

function TopDeals() {
  const [discount, setDiscount] = useState(() => {
    const lastUpdate = window.localStorage.getItem("lastUpdate");
    const savedItems = JSON.parse(window.localStorage.getItem("discountItems"));
    const now = Date.now();

    // If there's no saved items or last update, or it's been more than 3 hours since the last update
    if (!savedItems || !lastUpdate || now - lastUpdate > 1800000) {
      const newItems = [...Randomlist(List, 9)];
      window.localStorage.setItem("discountItems", JSON.stringify(newItems));
      window.localStorage.setItem("lastUpdate", now);
      return newItems;
    }

    // Otherwise, return the saved items
    return savedItems;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newItems = [...Randomlist(List, 9)];
      setDiscount(newItems);
      window.localStorage.setItem("discountItems", JSON.stringify(newItems));
      window.localStorage.setItem("lastUpdate", Date.now());
    }, 1800000);

    return () => clearInterval(interval);
  }, []);

  function Randomlist(arr, num) {
    const randomIndex = [...arr].sort(() => 0.5 - Math.random());
    return randomIndex.slice(0, num);
  }
  return (
    <div className=" w-full h-auto flex flex-row flex-wrap justify-around">
      {discount
        .filter((item) => {
          return (
            item.id.slice(0, 2) === "fg" ||
            item.id.slice(0, 2) === "af" ||
            item.id.slice(0, 2) === "kt"
          );
        })
        .map((item) => {
          return (
            <TopItem
              Id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
    </div>
  );
}

function TopItem({ Id, image, name, price }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(Id);

  return (
    <div className=" border-2 border-blue-950 dark:border-yellow-500 rounded-lg w-44 md:w-52 lg:w-72 h-64 md:h-72 lg:h-96 mb-5 flex flex-col justify-between shadow-md dark:shadow-slate-700">
      <div
        className=" rounded-t-lg w-full h-52 md:h-64 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className=" mb-2">
        <p className=" text-xs md:text text-black dark:text-white">
          <b>{name}</b>
        </p>
        <h4 className=" text-xs md:text text-black dark:text-white">
          <span style={{ textDecoration: "line-through", color: "red" }}>
            GHC {price}
          </span>{" "}
          GHC {(price * 0.8).toFixed(2)}
        </h4>

        {quantity === 0 ? (
          <button
            className=" w-36 md:w-44 lg:w-64 h-7 md:h-10 border-4 border-yellow-500 rounded-md bg-blue-950 dark:bg-slate-900 text-white"
            onClick={() => increaseCartQuantity(Id)}
          >
            ADD TO CART
          </button>
        ) : (
          <div>
            <button
              className=" w-12 h-7 border-2 border-yellow-500 rounded-md bg-blue-950 text-white"
              onClick={
                quantity === 1
                  ? () => removeFromCart(Id)
                  : () => decreaseCartQuantity(Id)
              }
            >
              -
            </button>
            <span>
              <b>{quantity}</b>
            </span>{" "}
            <b>in cart</b>
            <button
              className=" w-12 h-7 border-2 border-yellow-500 rounded-md bg-blue-950 text-white"
              onClick={() => increaseCartQuantity(Id)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default TopDeals;
