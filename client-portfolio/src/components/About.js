import React, { useEffect, useState } from 'react';
// sanity.io
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
// image
import background from '../img/warm_code.jpg';
import Spinner from './Spinner';
import Experience from './Experience';
import Education from './Education';

// geting url for image
const builder = imageUrlBuilder(sanityClient);
const urlFor = source => {
    return builder.image(source);
}

const About = () =>  {
    const [author, setAuthor] = useState(null);

    // states for expansion
    const [showExp, setShowExp] = useState(false);
    const [showEdu, setShowEdu] = useState(false);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then(data => setAuthor(data[0])).catch("This is about error");
    }, []);

    // functions for showing parts of ui
    const eduShow = (e) => {

    }
    
    // needed in case author has not yet been loaded
    if (!author) return (<Spinner />);

    return (
        <main className="bg-gray-900 min-h-screen relative">
            <img src={background} alt="Image" className="absolute w-full h-full"/>
            <div className="p-3 sm:p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-3 sm:p-20">
                {author.authorImage !== null && (
                        <img src={urlFor(author.authorImage).url()} className="shadow-2xl flex rounded object-center w-full h-full max-w-64 sm:w-2/3 sm:h-2/3 lg:w-64 lg:h-64 sm:ml-24 lg:mr-8" alt={author.name} />
                    )}
                    <div className="text-lg flex flex-col sm:justify-center">
                        <h1 className="name text-4xl text-center sm:text-6xl text-blue-300 mb-4">
                            <span className="text-red-100">{author.name}</span>
                        </h1>
                        <div className="prose flex-shrink lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="vl3zfjoo" dataset="production"/>
                        </div>
                    </div>
                </section>
                <hr></hr>
                <section className="bg-blue-800 rounded-lg shadow-2xl">
                    <div className="pt-10">
                        <h1 className="text-gray-50 text-3xl justify-center text-center flex">
                            <button className="hover:text-pink-500" onClick={e => setShowExp(!showExp)}>{showExp ? (<span>Hide Experience</span>) : (<span>Show Experience</span>)}</button>
                        </h1>
                        <br/>
                        {showExp && (
                            <Experience />
                        )}   
                    </div>
                    <hr className="mt-10"/>
                    <div className="pt-10">
                        <h1 className="text-gray-50 text-3xl justify-center text-center flex">
                            <button className="hover:text-pink-500" onClick={e => setShowEdu(!showEdu)}>{showEdu ? (<span>Hide Education</span>) : (<span>Show Education</span>)}</button>
                        </h1>
                        <br/>
                        {showEdu && (
                            <Education />
                        )}
                    </div>
                    <div><br/><br/></div>
                </section>

                
            </div>
        </main>
    )
}



export default About
