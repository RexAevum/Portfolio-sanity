import React from 'react'
import { Email } from '../default';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { LinkedIn, Github, DevConnector } from '../default';


const Navbar = () => {
    const myMail = `mailto:${Email}`;

    return (
        <header className="bg-blue-800">
            <div className="container sm:mx-auto flex justify-between">
                <nav className="flex flex-wrap">
                    <NavLink exact to='/' activeClassName="text-grey-50" className="inline-flex items-center py-1 px-3 sm:py-5 sm:px-3 sm:mr-4 text-red-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest" >
                        Rolans A
                    </NavLink>
                    <NavLink to='/about' activeClassName="text-red-100 bg-blue-500 rounded" className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-red-800 ">
                        About Me
                    </NavLink>
                    <NavLink to='/projects' activeClassName="text-red-100 bg-blue-500 rounded" className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-red-800 ">
                        Projects
                    </NavLink>
                    <NavLink to='/posts' activeClassName="text-red-100 bg-blue-500 rounded" className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-red-800 ">
                        My Posts
                    </NavLink>
                </nav>
                <div className="inline-flex flex-wrap sm:felx-nowrap py-3 px-3 my-6 mx-2">
                    <SocialIcon url={myMail} nework="email" label="DevConnector" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} className="inline-flex items-center mb-2 md:mx-2"/>
                    <SocialIcon url={LinkedIn} className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} className="inline-flex items-center mb-2 md:mx-2" />
                    <SocialIcon url={Github} className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} className="inline-flex items-center md:mx-2 sm:mb-2"/>
                </div>
            </div>
        </header>
    )
}


export default Navbar;
