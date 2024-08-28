import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ company: 'AMZ', category: 'Laptop', top: 10, minPrice: 0, maxPrice: 10000 });

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProducts(filters.company, filters.category, filters.top, filters.minPrice, filters.maxPrice);
            setProducts(data);
        };
        fetchData();
    }, [filters]);

    return (
        <div>
            <Filters setFilters={setFilters} />
            <ProductList products={products} />
        </div>
    );
};

export default AllProducts;
