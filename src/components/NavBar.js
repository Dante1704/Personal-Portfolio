import React from 'react';
import { useState } from 'react';

const NavBar = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="relative navbar flex flex-col sm:flex-row justify-between mx-auto max-w-5x1 md:w-4/5 lg:w-full bg-gray-100">
         <div className="flex flex-row justify-between w-full">{/* fixed z-30 top-4 right-4 bg-gray-200 rounded-lg sm:hidden shadow-md */}
            <p className="glass w-12 h-12 p-2.5	align-bottom  rounded-full text-white text-center  bg-black font-bold hover:bg-gradient-to-r from-rose-600 to-yellow-400 normal-case text-xl">DK</p>
            {  
              isExpanded ?
              <button className="btn-sm btn btn-square btn-outline sm:hidden" onClick={()=>setIsExpanded(!isExpanded)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
               :
              <button className="btn btn-square btn-sm btn-ghost sm:hidden" onClick={()=>setIsExpanded(!isExpanded)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            }
        </div>
        <div className={!isExpanded ? "invisible flex absolute top-16 right-0 sm:static sm:visible" : "flex absolute top-16 right-0 sm:static sm:visible"}>
            <ul className={"menu menu-horizontal pr-4 flex flex-col items-start sm:flex-row"}>
              <li><a href="#nowhere">PROJECTS</a></li>
              <li><a href="#nowhere">ABOUT</a></li>
              <li><a href="#nowhere">CONTACT</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
//faltaria ponerle alguna transicion a la aparicion del menu