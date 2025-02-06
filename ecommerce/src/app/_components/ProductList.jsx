import React from 'react';


function ProductList({ productList }) {
  return (
    <div>
      {productList.map(item => (
        <div key={item?.id}> {/* Ensure `id` is unique */}
          {item?.title}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
