import React, { Fragment } from 'react';

const Navbar = ({ menuItems }) => {

  return (
    <div>
        <ul>
            {menuItems.map((menuItem, index) => (
                <li key={index}>{menuItem}</li>
            ))}
        </ul>
    </div>

    // <Fragment>
    //     <p>hello navbar</p>
    //     <p>Will this work?</p>
    // </Fragment>
  );
};

export default Navbar;