import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === id); // Assuming `id` is the unique identifier

    return (
        <div>
            <h2>{product.productName}</h2>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
        </div>
    );
};

export default ProductPage;
