import React from 'react'
import EIC from '../Images/EIC.jpeg'
import SIH from '../Images/SIH.jpg'
import GDSC from '../Images/gdsc.png';
import LEARNHATTON from '../Images/learnhatton.jpg';
export default function NavBar() {
    return (
        <div className='bg-[#1A120B] h-auto'>
            <h1 className="text-4xl text-white ave text-center py-24">Work Experience</h1>
            <div className="text-[#1A120B] timeline relative w-full p-5 md:p-16 after:absolute after:w-2 after:h-full after:top-0 md:after:left-[50%] after:-z-[-1] after:bg-white after:-ml-1">
                <div className="container hidden md:block py-10 px-12 relative w-full md:w-[50%] left-0">
                    <div className="text-box py-5 px-8 relative rounded-md bg-[#D5CEA3]">
                        <img src={EIC} alt="logo" className='absolute w-11 rounded-xl -right-[4.25rem] top-8 z-10' />
                        <h1 className='font-bold text-xl'>Electro Infinity Club</h1>
                        <small>2023-2024</small>
                        <p className='text-justify'>As Student Coordinator at Electro Infinity Club, I led and organized technology-focused events and activities, fostering a vibrant community of tech enthusiasts.</p>
                        <span className='h-0 w-0 absolute top-7 z-[1] rightarrow'></span>
                    </div>
                </div>
                <div className="container md:hidden py-10 px-12 relative w-full md:w-[50%] left-0 md:left-[50%]">
                    <div className="text-box py-5 px-8 relative rounded-md bg-[#D5CEA3]">
                        <img src={EIC} alt="logo" className='absolute h-12 rounded-md -left-[4.25rem] top-8 z-10' />
                        <h1 className='font-bold text-xl'>Electro Infinity Club</h1>
                        <small>2023-2024</small>
                        <p className='text-justify'>As Student Coordinator at Electro Infinity Club, I led and organized technology-focused events and activities, fostering a vibrant community of tech enthusiasts.</p>
                        <span className='h-0 w-0 absolute top-7 z-[1] leftarrow'></span>
                    </div>
                </div>
                <div className="container py-10 px-12 relative w-full md:w-[50%] left-0 md:left-[50%]">
                    <div className="text-box py-5 px-8 relative rounded-md bg-[#D5CEA3]">
                        <img src={SIH} alt="logo" className='absolute h-12 rounded-md -left-[4.25rem] top-8 z-10' />
                        <h1 className='font-bold text-xl'>Smart India Hackathon</h1>
                        <small>2023-2024</small>
                        <p className='text-justify'>As a Web Developer at Smart India Hackathon, I contributed to innovative solutions for national challenges, showcasing my skills in rapid prototyping and problem-solving.</p>
                        <span className='h-0 w-0 absolute top-7 z-[1] leftarrow'></span>
                    </div>
                </div>
                <div className="container hidden md:block py-10 px-12 relative w-full md:w-[50%] left-0">
                    <div className="text-box py-5 px-8 relative rounded-md bg-[#D5CEA3]">
                        <img src={GDSC} alt="logo" className='absolute w-11 rounded-xl -right-[4.25rem] top-8 z-10' />
                        <h1 className='font-bold text-xl'>Google Developer Student Club</h1>
                        <small>2023-2024</small>
                        <p className='text-justify'>I honed my technical skills and gained valuable insights into building impactful Projects.</p>
                        <span className='h-0 w-0 absolute top-7 z-[1] rightarrow'></span>
                    </div>
                </div>
                <div className="container md:hidden py-10 px-12 relative w-full md:w-[50%] left-0 md:left-[50%]">
                    <div className="text-box py-5 px-8 relative rounded-md bg-[#D5CEA3]">
                        <img src={GDSC} alt="logo" className='absolute h-12 rounded-md -left-[4.25rem] top-8 z-10' />
                        <h1 className='font-bold text-xl'>Google Developer Student Club</h1>
                        <small>2023-2024</small>
                        <p className='text-justify'>I honed my technical skills and gained valuable insights into building impactful Projects.</p>
                        <span className='h-0 w-0 absolute top-7 z-[1] leftarrow'></span>
                    </div>
                </div>
                <div className="container py-10 px-12 relative w-full md:w-[50%] left-0 md:left-[50%]">
                    <div className="text-box py-5 px-8 relative rounded-md bg-[#D5CEA3]">
                        <img src={LEARNHATTON} alt="logo" className='absolute w-12 h-8 rounded-md -left-[4.25rem] top-8 z-10' />
                        <h1 className='font-bold text-xl'>LearnHatton</h1>
                        <small>2024-</small>
                        <p className='text-justify'>As a MERN Stack Developer at LearnHatton, I am involved in building a decentralized platform for student education, utilizing my skills in full-stack development to enhance learning experiences.</p>
                        <span className='h-0 w-0 absolute top-7 z-[1] leftarrow'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}