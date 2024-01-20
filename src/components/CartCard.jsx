import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartSlice";

const CartCard = ({ product, amount }) => {
  const title = product.title;
  const brand = product.brand;
  const price = product.price;
  const discount = product.discountPercentage;
  const thumbnail = product.thumbnail;
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-neutral-900 mb-5 w-full rounded-md duration-300 flex">
      <div>
        <img
          className="w-60 rounded-md"
          src={thumbnail}
          alt={`${title} thumbnail`}
        />
      </div>
      <div className="w-full mx-3 flex flex-col justify-between">
        <div className="flex justify-between w-full mb-5">
          <div className="flex flex-col">
            <div className="text-2xl">{title}</div>
            <div className="text-sm text-neutral-500">{brand}</div>
          </div>
          <div className="flex flex-col text-center">
            <div className="text-2xl text-green-600">{`${price}$`}</div>
            <div className="text-xs  text-orange-500 text-right">{`${discount}% OFF`}</div>
          </div>
        </div>
        <div className="text-base flex items-center justify-between">
          <div>{`Amount: ${amount}`}</div>
          <div
            onClick={() => dispatch(removeProduct(product))}
            className="text-red-700 text-base border-red-700 border-2 p-2 rounded-md duration-300 hover:text-neutral-900 hover:bg-red-700"
          >
            <FaTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
