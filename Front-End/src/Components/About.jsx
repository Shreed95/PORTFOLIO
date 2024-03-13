import React from 'react'
import photo from '../Images/Img1.jpeg'
import aboutImg from '../Images/bg.jpeg'
import html from '../Images/HTML.png'
import css from '../Images/CSS.png'
import js from '../Images/JS.png'
import tailwind from '../Images/tailwind.png'
import node from '../Images/node.png'
import mongo from '../Images/mongodb.png';
export default function About(props) {
  return (
    <>
      <div className='grid grid-rows-1 md:grid-cols-2 -z-10 '>
        <div className="flex justify-center items-center p-11 bg-[#1A120B]" style={{backgroundImage: `url(${aboutImg})`}}>
          <img src={photo} alt="myself" className='rounded-3xl h-96'/>
        </div>
        <div className="bg-[#1A120B] py-11 text-white text-xl text-justify">
          <p className="p-5 ave text-4xl">About Me:-</p>
          <div className='px-5 text-4xl h-44 lg:h-32'>Hello Everyone, I'm a Passionate <span className='font-bold text-white'>{props.text}</span></div>
          <p className='px-5 text-justify'>Greetings, I'm Shreed, a second-year student with a dual passion for Web Development and Competitive Programming.</p>
          <p className='p-5 text-justify'>Being a web developer, I relish the opportunity to bring digital ideas to life and create meaningful online experiences.</p>
          <p className='p-5 text-justify'>In tandem with my studies, I've delved into the world of competitive programming. The art of algorithmic problem-solving has become a thrilling pursuit for me. </p>
          <p className='p-5 text-justify'>This dynamic combination of web development and competitive programming fuels my ambition and fuels my drive to excel in the ever-evolving tech landscape.</p>
          <button class="bg-[#E5E5CB] hover:bg-[#D5CEA3] text-[#1A120B] p-1 m-2 rounded-xl text-[15px] font-semibold">Download Resume</button>
          <a href="https://github.com/Shreed95" target='_blank'><button className="bg-[#E5E5CB] hover:bg-[#D5CEA3] text-[#1A120B] p-1 m-2 rounded-xl text-[15px] font-semibold">GitHub Profile</button></a>
        </div>
      </div>
      <div className='shadow-lg bg-[#3C2A21]'>
            <h1 className='text-4xl ave text-white text-center py-4'>Skills</h1>
            <div className="grid grid-rows-1 md:grid-cols-2">
                <div className=''>
                    <h3 className='text-center text-3xl py-3 font-mono text-white'>Front-End</h3>
                    <div className="flex justify-center items-center">
                        <img src={html} alt="" className='w-16 p-3'/>
                        <img src={css} alt="" className='w-16 p-3'/>
                        <img src={js} alt="" className='w-16 p-3'/>
                        <img src={tailwind} alt="" className='w-16 p-3'/>
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-center text-3xl py-3 font-mono text-white'>Back-End</h3>
                    <div className="flex justify-center items-center">
                        <img src={node} alt="" className='w-24 p-3'/>
                        <img src={mongo} alt="" className='w-24 p-3'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
