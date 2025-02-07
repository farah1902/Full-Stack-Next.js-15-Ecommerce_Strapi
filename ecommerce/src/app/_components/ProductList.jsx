import React from 'react';
import ProductItem from './ProductItem';


function ProductList({ productList }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'> {/* 1-phone 2-tablet 3-pc */}
      {productList.map(item => (
        <div key={item?.id}> {/* Ensure `id` is unique */}
          <ProductItem product = {item}/>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
