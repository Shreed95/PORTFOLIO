import React from 'react'
import INX from '../Images/INX.png';
import meetup from '../Images/meetup.png';
import amigos from '../Images/amigos.png';
export default function NavBar() {
    return (
        <div className="bg-[#1A120B] h-auto">
            <div className='text-4xl text-white ave text-center py-24'>Projects</div>
            <div className='grid grid-rows-1 md:grid-cols-2 text-white place-items-center'>
                <div className="max-w-sm rounded-lg shadow mx-12 my-4 bg-[#3C2A21] flex flex-col justify-center items-center h-[600px]">
                    <img className="rounded-t-lg p-5 w-56" src={meetup} alt="" />
                    <div className="p-5 text-center">
                        <div className="mb-2 text-2xl font-bold text-white">Meet-Up</div>
                        <p className="mb-3 text-white text-justify">Meet-up is an innovative website designed to enhance social experiences by facilitating seamless coordination among friends for group gatherings. Our platform simplifies the process of planning get-togethers by leveraging the geographic locations of friends and suggesting optimal meetup spots.</p>
                        <a href='https://meet-up-gilt.vercel.app/' className="px-3 py-2 text-sm text-center text-[#1A120B] btn-design rounded-md bg-[#D5CEA3]">Visit Website</a>
                    </div>
                </div>
                <div className="max-w-sm rounded-lg shadow mx-12 my-4 bg-[#3C2A21] flex flex-col justify-center items-center h-[600px]">
                    <img className="rounded-t-lg p-5 w-64" src={amigos} alt="" />
                    <div className="p-5 text-center">
                        <div className="mb-2 text-2xl font-bold text-white">Amigos</div>
                        <p className="mb-3 text-white text-justify">Amigos is a social media platform inspired by Instagram, allowing users to create posts and share them on Home Screen. With its infinite scroll feature, users can seamlessly explore a never-ending stream of content. Join Amigos today to share your moments and connect with others in a visually engaging way!</p>
                        <a href='https://amigos-red.vercel.app' className="px-3 py-2 text-sm text-center text-[#1A120B] btn-design rounded-md bg-[#D5CEA3]">Visit Website</a>
                    </div>
                </div>
                <div className="max-w-sm rounded-lg shadow mx-12 my-4 bg-[#3C2A21] h-[600px]">
                    <img className="rounded-t-lg invert p-5 w-full" src={INX} alt="" />
                    <div className="p-5 text-center">
                        <div className="mb-2 text-2xl font-bold text-white">InspireX</div>
                        <p className="mb-3 text-white text-justify">Designed and developed a captivating landing page for a college event using HTML and CSS, showcasing key event details and engaging visuals. The page features a sleek, user-friendly design to attract and inform visitors about the upcoming event, emphasizing its importance and encouraging participation.</p>
                        <a href='https://shreed95.github.io/InspireX/' className="px-3 py-2 text-sm text-center text-[#1A120B] btn-design rounded-md bg-[#D5CEA3]">Visit Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
}