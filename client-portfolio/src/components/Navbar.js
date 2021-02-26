import React from 'react'
import { Email } from '../default';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { LinkedIn, Github, DevConnector } from '../default';


const Navbar = () => {
    const myMail = `mailto:${Email}`;

    return (
        <header className="bg-blue-800">
            <div className="container sm:mx-auto flex flex-shrink-0 justify-around">
                <nav className="inline-flex">
                    <NavLink exact to='/' activeClassName="text-grey-50" className="inline-flex items-center py-1 px-3 sm:py-5 sm:px-3 sm:mr-4 text-red-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest" >
                        Rolans A
                    </NavLink>
                </nav>
                <nav className="flex flex-wrap justify-center sm:inline-flex whitespace-nowrap py-3 px-3 my-6">
                    <NavLink to='/about' activeClassName="text-red-100 bg-blue-500 px-1 py-1.5 rounded" className="inline-flex items-center m-2 text-red-200 hover:text-red-800 ">
                        About Me
                    </NavLink>
                    <NavLink to='/projects' activeClassName="text-red-100 bg-blue-500 px-1 py-1.5 rounded" className="inline-flex items-center m-2 text-red-200 hover:text-red-800 ">
                        Projects
                    </NavLink>
                    <NavLink to='/posts' activeClassName="text-red-100 bg-blue-500 px-1 py-1.5 rounded" className="inline-flex items-center m-2 text-red-200 hover:text-red-800 ">
                        My Posts
                    </NavLink>
                </nav>
                <div className="flex-wrap flex justify-center sm:inline-flex sm:flex-shrink my-6 ml-1">
                    <SocialIcon url={myMail} nework="email" label="DevConnector" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} className="inline-flex items-center m-2 md:ml-2"/>
                    <SocialIcon url={LinkedIn} className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} className="inline-flex items-center m-2 md:mx-2" />
                    <SocialIcon url={Github} className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} className="inline-flex flex-wrap items-center m-2"/>
                </div>
            </div>
        </header>
    )
}


export default Navbar;
