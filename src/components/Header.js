import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-danger navbar-light">
            <ul className="navbar-nav">
    <li className="nav-item active">
      <Link className="nav-link" to="/products">Products</Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
</nav>
        </div>
    );
};

export default Header;