import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  return (
    <div>
      <div>Product</div>
      <div>{productId}</div>
    </div>
  );
};

export default Product;
