import React from 'react';
import Grilla from './grilla'


const GridContainer = styled.div;
const GridItem = styled.div;
const ProductCard = ({ product }) => {
return (
    <div className="product-card">
        <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
    </div>
);
};

const ProductList = ({ products }) => {
return (
    <div className="product-list">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
    ))}
    </div>
);
};

export default ProductList;
