import { useState } from 'react';
import Hero from './Hero';
import ProductDisplay from './ProductDisplay';
import '../../App.css';

const Home = () => {

  const [ products, setProducts ] = useState();

  const getAllProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      // console.log(response);
      const data = await response.json();
      console.log("data from Home: ", data)
      setProducts(data);
      console.log(products);
  };

  return (
    <div className="home">
        <Hero getAllProducts={getAllProducts} />
        <ProductDisplay products={products} />
    </div>
  );
};

export default Home;