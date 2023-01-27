import React from 'react';
import { useState } from 'react';

const NavBar = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="relative navbar flex flex-col sm:flex-row justify-between mx-auto max-w-5x1  lg:w-full bg-gray-100">
         <div className="flex flex-row justify-between w-full">
            <p className="glass w-12 h-12 p-2.5	align-bottom rounded-full text-white text-center  bg-black font-bold hover:bg-gradient-to-r from-rose-600 to-yellow-400 normal-case text-xl">DK</p>
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
        <div className={!isExpanded ? "flex absolute top-16 -right-32 transition-[right] duration-500 ease-out sm:static sm:visible" : "flex absolute bg-gray-100 top-16 right-0 transition-[right] duration-500 ease-out rounded sm:static sm:visible"}>
            <ul className={"menu menu-horizontal flex flex-col items-start border-black rounded sm:flex-row transition-all"}>
              <li><a href="#nowhere" className={"min-w-[120px]"}>PROJECTS</a></li>
              <li><a href="#nowhere" className={"min-w-[120x]"}>ABOUT</a></li>
              <li><a href="#nowhere" className={"min-w-[120px]"}>CONTACT</a></li>
            </ul>
        </div>
    </nav>     
  )
}

    
  
export default NavBar
//faltaria ponerle alguna transicion a la aparicion del menu
