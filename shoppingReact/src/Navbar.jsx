import { useState } from "react";
import Card from "./Card";

function Navbar({ items, total, removeItems }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">Shopping</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">All Product</a></li>
                <hr />
                <li><a className="dropdown-item" href="#">Popular Items</a></li>
                <li><a className="dropdown-item" href="#">New Arrivals</a></li>
              </ul>
            </li>
          </ul>
          <div className="nav-item dropdown cardDropDown">
            <div className="cartBtn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cart ({items.length})
            </div>
            <ul className="dropdown-menu">
              <Card items={items} total={total} removeItems={removeItems} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
