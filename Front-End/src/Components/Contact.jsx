import React, { useState } from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';

export default function NavBar() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [msg, setMsg] = useState('');
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3500/contactform", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        if (data) {
            setFormSubmitted(true);
            setMsg('Form submitted successfully!');
        }
    };

    return (
        <div className="text-white">
            <div className='bg-[#1A120B] h-auto pb-14'>
                <h1 className="text-4xl ave text-center py-24">Contact Box</h1>
                <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-[#3C2A21] rounded-lg">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold font-mono text-white">Lets talk about everything!</h2>
                        <div>
                            <ul className='flex justify-start py-16'>
                                <li className='pr-12'><a href="https://www.linkedin.com/in/shreed-raskar-646b20254" target='_blank' rel="noreferrer"><BsLinkedin className='text-2xl' /></a></li>
                                <li className='pr-12'><a href="https://www.instagram.com/shreed_95/" target='_blank' rel="noreferrer"><BsInstagram className='text-2xl' /></a></li>
                                <li><a href="mailto:shreedraskar48@gmail.com" target='_blank' rel="noreferrer"><BiMailSend className='text-2xl' /></a></li>
                            </ul>
                        </div>
                    </div>
                    <form className="" onSubmit={handleSubmit}>
                        <div>
                            <span className="text-sm text-white font-bold">FULL NAME</span>
                            <input className="w-full text-[#1A120B] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" name='name' required="true" value={form.name} onChange={handleForm} placeholder="Enter your Name" />
                        </div>
                        <div className="mt-8">
                            <span className="text-sm text-white font-bold">EMAIL</span>
                            <input className="w-full text-[#1A120B] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" name='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={form.email} onChange={handleForm} required="true" placeholder='Enter your Email' />
                        </div>
                        <div className="mt-8">
                            <span className="text-sm text-white font-bold">MESSAGE</span>
                            <textarea
                                className="w-full h-32 text-[#1A120B] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name='message' required="true" value={form.message} onChange={handleForm} placeholder='Enter your Message'></textarea>
                        </div>
                        <div className="mt-8">
                            <button
                                className="text-sm font-bold text-[#1A120B] bg-[#D5CEA3] btn-design p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" type='submit'>
                                SEND MESSAGE
                            </button>
                        </div>
                        <p className='text-green-300 text-xl pt-8'>{msg}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}
