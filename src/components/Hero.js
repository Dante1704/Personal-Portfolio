import React from 'react';
import { Link } from 'react-router-dom';
import profile from "../images/profile.jpeg";
import location from "../images/placeholder.png";
import "../index.css"

const Hero = () => {

  return (
    <section className="">
       <div className="avatar hidden md:inline">
        <div className="rounded-full md:visible max-w-[300px] 2xl:max-w-[400px]">
            <img src={profile} className="" alt="Dante's profile"/>
        </div>
       </div>
        <div>
            <div className="mt-36 px-2">
                <img src={location} className="inline" alt="Buenos Aires, Argentina"/>
                <span className=''>&nbsp;&nbsp;Buenos Aires, Argentina</span>
            </div>
            <div className="mt-4 px-2">
              <span className='text-3xl font-bold name-animated'>Dante Nicolas Kaddarian,</span>
              <h1 className='text-6xl font-bold profession-animated'>Web Developer</h1>
              <p className='mt-6'>I am a Web Developer based in Argentina. I have worked in many industries, have completed 2 years of engineering, and have completed 50% math teacher career, as well. Those achievements, allow me to see things from different points of view, to have a logical thinking, and break down a huge problem into little problem and so on until I can start working in the solution. Right now, I am implementing all this in web development because I have discovered, after more than 800hs of programming, that is my passion.</p>
            </div>
            <div className="mt-20 flex justify-center gap-2">
              <Link to="/pdf" target="_blank"><button className="btn">GET MY RÉSUMÉ</button></Link>
              <a href='mailto:dante.nkaddarian@gmail.com'>
                <button className="btn btn-outline">dante.nkaddarian@gmail.com</button>
              </a>
            </div>
        </div>
    </section>
  )
}

export default Hero
