import React from 'react';
import ProductTitle from './components/ProductTitle';
import ProductDescription from './components/ProductDescription';
import Products from './components/Products';

const productList = [
  {
    id: 1,
    title: "Produto 1",
    description: "Descrição detalhada do produto 1.",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Produto 2",
    description: "Descrição detalhada do produto 2.",
    imageUrl: "https://via.placeholder.com/150"
  },
 
];

function App() {
  return (
    <div>
      <ProductTitle />
      <ProductDescription />
      <Products productList={productList} />
    </div>
  );
}

export default App;
