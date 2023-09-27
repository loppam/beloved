import React from "react";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="flex">
          <div className="leftt">© Copyright 2023. Sneaklin</div>
          <div className="rightt">
            <nav className="loll">
              <Link to='https://sneaklin.com/about-us/'>About Us</Link>
              <Link to='https://sneaklin.com/shop/'>shop</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
