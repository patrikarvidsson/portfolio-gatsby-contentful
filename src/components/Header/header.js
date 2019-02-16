import React from "react"
import logo from "./logo-black.svg"
import { Link } from "gatsby"
import styles from "./header.module.css"

const Header = () => (
    <header className="pt-16 px-24 flex items-center justify-between w-full">
      <div>
        <Link className="shadow-none hover:bg-transparent" to="/">
          <img className="h-16 w-16" src={logo} alt="Logo" />
        </Link>
      </div>
      <nav role="navigation">
        <ul className="list-reset m-0 uppercase tracking-wide text-base">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio/">Work</Link>
          </li>
          <li>
            <Link to="/blog/">Journal</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
)

export default Header
