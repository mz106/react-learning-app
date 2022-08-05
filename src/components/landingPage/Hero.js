import { useState } from 'react';
import '../../App.css';

const Hero = ({ getAllProducts }) => {

  

  return (
    <div className="hero">
        <p>Michael is super Awesome. He is also really 38 but looks young due to his Awesomeness</p>
        <p>Demi thinks that Monster is the key to looking young, but I think that it is the way to a heartattack</p>
        <button onClick={getAllProducts} >Click Me!</button>
        <hr></hr>
    </div>
  );
};

export default Hero;