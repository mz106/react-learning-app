import React from 'react'
import ProductCard from './ProductCard';

const ProductDisplay = ({ products }) => {
  return (
    <div className="products">
        {
            products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))
        }
    </div>
  );
};

export default ProductDisplay;