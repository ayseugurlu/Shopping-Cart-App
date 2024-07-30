import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">
      Shopping Cart
    </Link>
    <button
      className="navbar-toggler text-secondary border-3"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse text-end w-full" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/new-product">
            New Product
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="product-list">
            Product List
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>

   </div>
  );
}

export default Navbar