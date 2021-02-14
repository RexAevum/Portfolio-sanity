import React from 'react'
import PropTypes from 'prop-types'
import image from '../img/code.jpg';

const Home = props => {
    return (
        <main className="bg-gray-900 min-h-screen relative">
            <img src={image} alt="Background" className="absolute object-cover w-full h-full"/>
            <div className="p-8 container mx-auto relative flex">
            <section className="relative flex justify-center pt-12 lg:pt-64 px-8">
                <h1 className="rounded-xl bg-blue-800 p-10 text-5xl text-gray-50 text-center font-bold name leading-none lg:leading-snug home-name text-transform: capitalize">
                    Welcome! My name is Rolans Apinis and I am an aspiring software engeneer and this is my current site.
                    <p></p>
                    <small className="text-2xl">Thank you for visiting my page and please explore!</small>  
                </h1>
                
            </section>
            </div>
        </main>
    )
}

Home.propTypes = {

}

export default Home
