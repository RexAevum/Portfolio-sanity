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

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then(data => setAuthor(data[0])).catch("This is about error");
    }, []);
    
    // needed in case author has not yet been loaded
    if (!author) return (<Spinner />);

    return (
        <main className="bg-gray-900 min-h-screen relative">
            <img src={background} alt="Image" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
                {author.authorImage !== null && (
                        <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name} />
                    )}
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="name text-6xl text-blue-300 mb-4">
                            <span className="text-red-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="vl3zfjoo" dataset="production"/>
                        </div>
                    </div>
                </section>
                <Experience />
                <hr></hr>
                <Education />
            </div>
        </main>
    )
}



export default About
