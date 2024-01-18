import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, brand, price, discount, thumbnail }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="m-3 bg-neutral-900 rounded-md w-fit max-w-sm duration-300 hover:scale-105">
        <img className="rounded-t-md" src={thumbnail} alt={`${title} thumbnail`} />
        <div className="flex flex-row p-3 justify-between">
          <div className="flex flex-col">
            <div className="text-3xl">{title}</div>
            <div className="text-xl text-neutral-500">{brand}</div>
          </div>
          <div className="flex flex-col items-end"> 
            <div className="text-4xl text-green-400">{`${price}$`}</div>
            <div className="text-lg text-orange-400 text-right">{`${discount}% OFF`}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
