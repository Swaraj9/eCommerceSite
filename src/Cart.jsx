import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import CCard from "./cCard.jsx";
import { useProducts } from "./customHook.jsx";

const Cart = () => {
  const products = useProducts();

  return (
    <div className="flex">
      <Navbar searchBar={true} />
      <div className="flex mt-10 flex-col w-full ">
        <div className="m-20 grid grid-cols-4 gap-10">
          <div className="col-span-3">
            <div className="flex flex-col bg-slate-100 px-5 py-7">
              <div className="text-slate-900 font-normal text-3xl pb-4 ">
                Shopping cart
              </div>
              <hr className=" w-full border-slate-700" />
              <div className="p-3">
                {products.map((product) => (
                  <CCard
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
              <hr className=" w-full py-1 border-slate-700" />
              <div className="text-end text-lg text-neutral-700">{`Subtotal (items): 4242$`}</div>
            </div>
          </div>
          <div>
            <div className="bg-slate-100 px-5 py-7 grid-rows-1">
              <div className="text-neutral-700 text-lg">{`Subtotal (items): 4242$`}</div>
              <div className="text-slate-400">
                <Link to="/" reloadDocument>
                  View Products ›
                </Link>
              </div>

              <button className="w-full text-center text-2xl text-neutral-700 bg-yellow-400 border-yellow-400 border-2 p-1 px-3 rounded-xl mt-5 duration-300 hover:bg-slate-100 hover:text-yellow-400 ">
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
