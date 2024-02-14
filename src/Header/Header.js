import React from "react";
import "./Header.css";
import {  Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="p-3 align-items-center d-flex justify-content-between">
      <div>
        <h5 className="m-0 text-uppercase"> Frontend ToolKit</h5>
      </div>
      <div>
        <nav className="navbar p-0">
          <ul className="list-unstyled d-inline-flex gap-5 mb-0 me-5 small">
            <li>
              
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/features"> Features</Link>

            </li>
            <li>
              <div class="dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="https://karancreated.github.io/Y2MP3/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                Tools
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" className="nav-link">
                Showcase
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About us
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-4">
            <input
              type="Search"
              placeholder="Search"
              className="form-control form-search"
            />
            <button className="btn btn-sm btn-primary"> Search</button>
          </div>
        </nav>
      </div>
    </div>
  );
};
