import React, { useState } from 'react';
import ProductList from './ProductList'; // Assuming ProductList is in the same directory

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]); // Add new product to the list
  };

  const handleEditProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <ProductList products={products} onEdit={handleEditProduct} />
      {/* Add a form or button to handle adding a product */}
      <button onClick={() => handleAddProduct({ id: Date.now(), name: 'New Product', quantity: 10 })}>
        Add Product
      </button>
    </div>
  );
};

export default ProductManagement;
