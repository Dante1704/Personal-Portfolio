import React from 'react';
import { Link } from 'react-router-dom';
import profile from "../images/Profile-Picture.jpeg";
import GitHub from "../images/github.png";
import LinkedIn from "../images/linkedin.png";
import Twitter from "../images/twitter.png";
import "../index.css";

const About = () => {
  return (
    <>
      <h2 className='header-about text-5xl font-bold font-poppins text-center w-max subpixel-antialiased mx-auto p-2 pt-20'>About Me</h2>
      <section id='about'>
        <div className="flex flex-col justify-center items-center">
          <div className="avatar">
            <div className="mt-36 rounded-full">
              <img src={profile} className="max-w-xs" alt="Dante's profile"/>
            </div>
          </div>
          <Link to="/pdf" className="btn bg-slate-100 text-black mt-14 " target="_blank">
              GET MY RÉSUMÉ
          </Link>
          <div className='w-4/5 mx-auto mt-14 flex justify-around'>
            <div className='flex flex-col items-center'>
              <a href='https://www.linkedin.com/in/dante-nicolas-kaddarian-39696a131/' target="_blank" rel="noreferrer"><img src={LinkedIn} className="max-w-[32px] icon-link" alt="go to Dante's linkedin"/></a>
              <span className='text-white'>LinkedIn</span>
            </div>
            <div className='flex flex-col items-center'>
              <a href='https://twitter.com/kaddarian' target="_blank" rel="noreferrer"><img src={Twitter} className="max-w-[32px] icon-link" alt="go to Dante's twitter"/></a>
              <span className='text-white'>Twitter</span>
            </div>
            <div className='flex flex-col items-center'>
              <a href='https://github.com/Dante1704' target="_blank" rel="noreferrer">
                <img src={GitHub} className="max-w-[32px] turn-white icon-link invert" alt="go to Dante's github"/>
              </a>
              <span className='text-white'>GitHub</span>
            </div>
          </div>
        </div>
        <div className='max-w-2xl mt-14'>
          <div className="mt-4 px-4 flex flex-col justify-center items-start">
            <span className='text-2xl text-white font-bold md:text-3xl'>
            Hi! I'm Dante,
            </span>
            <p className='text-white mt-6 md:my-16 text-neutral xl:leading-loose'>
            At 18 years of age, I got my first job as a letter carrier for 6 months. Then, I went to work in a private transport agency in customer service, and here I was for 7 years and some months. The following year, when I was 19 years old and a year after starting this job, I decided to start studying computer engineering at the University of Buenos Aires at the same time I was working where after the first two years, I developed my logic by passing subjects such as mathematical analysis 1 and 2, linear algebra, introduction to physics, physics 1, introduction to chemistry and algorithms 1, among others. 
            </p>
            <p className='text-white my-2 text-neutral xl:leading-loose'>
            At the age of 25, I decided to change course and try something different.
            I started a new career as a high school mathematics teacher at the same time I got a new job. This time, in the automotive industry,  but as an administrative billing clerk where I worked for almost 5 years.
            </p>
            <p className='text-white my-2 text-neutral xl:leading-loose'>
            In December 2021, at 30 years of age and with some money saved, I decided to go back to programming without the certainty that this was my thing. In the first semester of 2022, I studied on my own and realized that I needed to share this path with people who were also trying to learn web development. Between March and May of this year, I had the opportunity to lead a group of people who had to census a sector of the population in what was the May 2022 census in Argentina. It was an enriching experience since I was in charge of 7 people to whom I also had to teach how to do their job. In August of the same year, I started the FullStack Web developer career in which I learned mainly the JavaScript ecosystem and what it is to work in a team, which I loved. In January 2023, I finished the career where we programmed hundreds of hours and many times for many hours a day, and still, the next day I was still getting up with a lot of desire to program. Programming for so many hours, the web development community, working in a team, and how fun it is to do this, led me to the determination that this is what I want to do. Now I keep learning every day because technology is advancing fast. I want to work as a full stack, front-end, or back-end developer in a team where we can get to know each other and help each other in our work. 
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About