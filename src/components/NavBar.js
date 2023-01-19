import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar flex justify-between mx-auto max-w-5x1 md:w-4/5 lg:w-3/4 bg-gray-100">
        <div className="flex-1">
            <a href="#nowhere" className="btn btn-ghost normal-case text-xl">DK</a>
        </div>
         <div className="flex-none sm:hidden">{/* fixed z-30 top-4 right-4 bg-gray-200 rounded-lg sm:hidden shadow-md */}
            <button className="btn btn-square btn-ghost">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a href="#nowhere">PROJECTS</a></li>
            <li><a href="#nowhere">ABOUT</a></li>
            <li><a href="#nowhere">CONTACT</a></li>
            </ul>
        </div>
    </nav>
    
  )
}

export default NavBar