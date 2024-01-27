import React from 'react';
import './Product.css';
import productsData from '../data/products.json';
import Product, {productProps} from './product';


const Products = () => {
  
  return (
    <ul style={{
      margin: 0,
      padding: 0,
      display: "flex",
      gap: "16px",
      flexFlow: "row wrap"
    }}>
      {
        productsData.map((product:productProps) => (
          <Product key={product.id} {...product}/>
        ))
      }
    </ul>
  )
}

export default Products;