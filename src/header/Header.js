import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="aligndiv" style={{ marginLeft: "10px" }}>
      <nav className="navbar navbar-expand bg-body-tertiary container-fluid">
        <label>
          <h6>All ➡️</h6>
        </label>
        <Link
          type="button"
          className="btn hover"
          to='/'
          
        >
          <h6>Home</h6>
        </Link>
        <Link
          type="button"
          className="btn hover"
          to='/elctronics'
        >
          <h6>Electronics</h6>
        </Link>
        <Link
          type="button"
          className="btn hover"
          to='/mens'
        >
          <h6>Men's</h6>
        </Link>
        <Link
          type="button"
          className="btn hover"
          to='/women'
        >
          <h6>Women's</h6>
        </Link>
        <Link
          type="button"
          className="btn hover"
          to='/jwellery'
        >
          <h6>Jwellery</h6>
        </Link>
        <button
          type="button"
          className="btn hover"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptionsseven"
          aria-controls="offcanvasWithBothOptions"
        >
          <h6>Fashion</h6>
        </button>
        
        <p className="ms-auto"></p>
        <h6>New Launches Mobiles, Electronics {"&"} more |</h6>
        <button type="button" className="btn hover">
          <h6>Shop Now</h6>
        </button>
      </nav>
    </div>
  );
}
