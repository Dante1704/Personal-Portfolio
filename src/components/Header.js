import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';

const Header = () => {
  return (
    <header className="min-h-[85vh] bg-[#e6e7ff]">
        <NavBar/>
        <Hero/>
    </header>
  )
}

export default Header;
