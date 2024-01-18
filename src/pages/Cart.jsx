import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import CartCard from "../components/CartCard.jsx";
import { useProducts } from "../hooks/customHook.jsx";

const Cart = () => {
  const products = useProducts();

  return (
    <div className="flex">
      <Navbar searchBar={true} />
      <div className="flex mt-10 flex-col w-full ">
        <div className="mt-20 flex flex-col w-full sm:flex-row sm:justify-center">
          <div className="col-span-3">
            <div className="flex flex-col px-5 py-7 rounded-md">
              <div className="font-normal text-3xl pb-4 ">
                Shopping cart
              </div>
              <hr className=" w-full" />
              <div className="p-3">
                {products.map((product) => (
                  <CartCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    brand={product.brand}
                    price={product.price}
                    discount={product.discountPercentage}
                    thumbnail={product.thumbnail}
                  />
                ))}
              </div>
              <br />
              <hr className=" w-full py-1" />
              <div className="text-end text-lg">{`Subtotal (items): 4242$`}</div>
            </div>
          </div>
          <div>
            <div className="bg-neutral-900 px-5 py-7 grid-rows-1 rounded-md">
              <div className="text-lg">{`Subtotal (items): 4242$`}</div>
              <div className="text-neutral-400">
                <Link to="/" reloadDocument>
                  View Products ›
                </Link>
              </div>

              <button className="w-full text-center text-2xl text-yellow-400 border-yellow-400 border-2 p-1 px-3 rounded-md mt-5 duration-300 hover:bg-yellow-400 hover:text-neutral-900">
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
