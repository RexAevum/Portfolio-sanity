import React from 'react'
import PropTypes from 'prop-types'
import image from '../img/code.jpg';

const Home = props => {
    return (
        <main>
            <img src={image} alt="Background" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gray-50 font-bold name leading-none lg:leading-snug home-name">Welcome, I am Rolans Apinis and this page is about me</h1>
            </section>
        </main>
    )
}

Home.propTypes = {

}

export default Home
