import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/full-logo.png"

const Header = ({ siteTitle }) => (
  <nav className="flex items-center justify-between flex-wrap bg-teal p-4">
    <div className="flex items-center flex-no-shrink text-white mr-6 pt-5">
      <img className="fill-current h-8 w-9 mr-2" width="auto" height="auto" src={logo} />
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      {/* <div className="text-sm lg:flex-grow">
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          Docs
        </a>
      </div> */}
      {/* <div>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a>
      </div> */}
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header