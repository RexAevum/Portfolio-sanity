import React from 'react'
import { Email } from '../default';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { LinkedIn, Github, DevConnector } from '../default';


const Navbar = () => {
    const myMail = `mailto:${Email}`;

    return (
        <header className="bg-blue-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink exact to='/' activeClassName="text-grey-50" className="inline-flex items-center py-5 px-3 mr-4 text-red-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest" >
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
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url={myMail} nework="email" label="DevConnector" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url={LinkedIn} className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}  />
                    <SocialIcon url={Github} className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}


export default Navbar;
