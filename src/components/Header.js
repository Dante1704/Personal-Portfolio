import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';

const Header = () => {
  return (
    <header className="min-h-[85vh]">
        <NavBar/>
        <Hero/>
    </header>
  )
}

export default Header
