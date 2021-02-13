import React from "react"
import { Link } from "gatsby"

import "bulma/css/bulma.css"

const Navbar = () => (
  <>
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "grey" }}
    >
      <div class="navbar-brand">
        <Link class="navbar-item" href="https://bulma.io">
          GOKIS Pilnik
        </Link>

        <button
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          onClick={() => {
            var burger = document.querySelector(".burger")
            var nav = document.querySelector("#navbar")
            burger.classList.toggle("is-active")
            nav.classList.toggle("is-active")
          }}
          style={{ border: "none", backgroundColor: "transparent" }}
        >
                      
          <span aria-hidden="true" />
                      
          <span aria-hidden="true" />
                      
          <span aria-hidden="true" />
                    
        </button>
      </div>

      <div id="navbar" class="navbar-menu">
        <div class="navbar-start">
          <Link class="navbar-item">Home</Link>
          <Link class="navbar-item">O nas</Link>
          <div class="navbar-item has-dropdown is-hoverable">
            <Link class="navbar-link">Zespoły</Link>

            <div class="navbar-dropdown">
              <Link class="navbar-item">About</Link>
              <Link class="navbar-item">Jobs</Link>
              <Link class="navbar-item">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
)
export default Navbar
