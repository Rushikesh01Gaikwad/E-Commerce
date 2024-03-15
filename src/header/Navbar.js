import React from "react";
import logo from "../Images/logo/mitraalogoo.png";


export default function Navbar(props) {


  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#009698" }}>
        <div className="container-fluid">
          <a className="navbar-brand">
            <img className="complogo my-3" src={logo} alt=""></img>
          </a>
          <div className="dropdown mx-1">
              <button
                className="btn custom-button dropdown-toggle btn-light my-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Select Country
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    India
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    USA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Canada
                  </a>
                </li>
              </ul>
            </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <button
                type="button"
                className="btn btn-light font-weight-bold mx-2 my-3"
                data-bs-toggle="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptionsone"
                aria-controls="offcanvasWithBothOptions"
              >
                Location
              </button>
            </ul>
            <textarea
              className="form-control"
              id="mybox"
              placeholder="Search here"
              rows="1"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-light mx-2 my-3"
            data-bs-toggle="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdroplang"
          >
            🔤Language
          </button>
          <button
            type="button"
            className="btn btn-light mx-2 my-3"
            data-bs-toggle="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdropsignin"
          >
            👤Sign in
          </button>
          <button
            type="button"
            className="btn btn-light mx-2 my-3 position-relative"
            data-bs-toggle="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptionscart"
            aria-controls="offcanvasWithBothOptions"
          >
            🛒Cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.totalincart}
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
