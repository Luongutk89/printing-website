import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { category, product } = useParams();

  return (
    <div>
      <h1>{category} - {product}</h1>
      {/* Here you would fetch and display the actual product details */}
    </div>
  );
}

export default ProductPage;
