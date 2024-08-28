import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 max-w-sm mx-auto">
      <div className="text-center">
        <h2 className="text-lg font-bold">{product.productName}</h2>
        <p className="text-gray-500">{product.category}</p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <img
          src={`https://via.placeholder.com/150?text=${product.productName}`}
          alt={product.productName}
          className="w-32 h-32 object-cover rounded"
        />
        <p className="text-xl font-semibold mt-2">${product.price}</p>
        <p className="text-sm text-gray-500">{product.availability}</p>
        <p className="text-sm text-yellow-500 mt-1">
          Rating: {product.rating} ⭐
        </p>
        <p className="text-sm text-red-500 mt-1">
          Discount: {product.discount}%
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
