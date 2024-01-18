import React from "react";
import { Link } from "react-router-dom";

const CCard = ({ id, title, brand, price, discount, thumbnail }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="p-4 w-full rounded-md max-w-sm duration-300 hover:scale-105 flex flex-row ">
        <div>
          <img className="w-60" src={thumbnail} alt={`${title} thumbnail`} />
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col text-center">
            <div className="text-slate-800 text-2xl">{title}</div>
            <div className="text-sm text-neutral-500">{brand}</div>
          </div>
          <div className="flex flex-col text-center">
            <div className="text-2xl text-green-600">{`${price}$`}</div>
            <div className="text-xs  text-red-700 text-right">{`${discount}% OFF`}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CCard;
