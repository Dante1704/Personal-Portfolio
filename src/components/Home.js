import React from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header/>
      <div>
        <svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path className="ux-shape-fill" opacity="0.15" d="M0 299L-2 19.9998C153 -16.0002 308 155 413 184C515.64 212.35 562 152 645 153C725 154 787 206 874 233C939.54 253.34 975 248 1000 244.61V299H0Z"/>
          <path className="ux-shape-fill" opacity="0.3" d="M0 300L-2 34C155 -9.00003 300 178 403 212C504.11 245.38 562 165 645 166C725 167 790.09 220.07 874 253C939.21 278.59 978.07 269.72 1000 263.61V300H0Z"/>
          <path className="ux-shape-fill" d="M0 300L-1 69.7099C216 56.9999 299.47 198.86 403 226C506 253 577 196 660 197C740 198 790.09 234.07 874 267C935.23 291 982 282.61 1000 277.61V300H0Z"/>
        </svg>
      </div>
      <main className='bg-black'>
        <Projects/>
        <About/>
        <Contact/>
      </main>
      <div>
        <svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path class="ux-shape-fill" opacity="0.15" d="m2,283.95503l-2,-279.0002c155,-36 310,135.0002 415,164.0002c102.64,28.35 149,-32 232,-31c80,1 142,53 229,80c65.54,20.34 101,15 126,11.61l0,54.39l-1000,0z" id="svg_1" stroke-width="0" transform="rotate(-180 500 141.978)"/>
          <path class="ux-shape-fill" opacity="0.3" d="m2,272.38571l-2,-266c157,-43.00003 302,144 405,178c101.11,33.38 159,-47 242,-46c80,1 145.09,54.07 229,87c65.21,25.59 104.07,16.72 126,10.61l0,36.39l-1000,0z" id="svg_2" transform="rotate(-180 500 136.193)"/>
          <path transform="rotate(-180 500.5 69.4531)" class="ux-shape-fill" d="m1,140.09374l-1,-230.2901c217,-12.71 300.47,129.1501 404,156.2901c103,27 174,-30 257,-29c80,1 130.09,37.07 214,70c61.23,24 108,15.61 126,10.61l0,22.39l-1000,0z" id="svg_3"/>
        </svg>
      </div>
      <Footer/>
    </>
  )
}

export default Home;