import { useState } from 'react'
import ProductDisplay from './ProductDisplay';
import "../../App.css";

const ProductCard = ({ product }) => {

  const [ thing, setThing ] = useState(false);

  const productClick = () => {
    if(!thing) {
        setThing(true);
    } else if (thing) {
        setThing(false);
    }
  };

  return (
    <div className="productCard" onClick={productClick}>
        <li>{product.title}</li>
        <li>{product.price}</li>
        {thing && <li>{product.description}</li>}
    </div>
  );
};

export default ProductCard;