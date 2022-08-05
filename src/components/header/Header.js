import React from 'react';
import Navbar from "./Navbar";
import Title from "./Title";

const Header = ({ michaelsTitle }) => {

  const menuItems = ["Home", "About", "Shop", "Contact"];

  return (
    <>
        <div>
            <Title michaelsTitle={michaelsTitle} />
            <Navbar menuItems={menuItems} />
        </div>
        <hr></hr>
    </>
  );
};

export default Header;