import React, { useState, useEffect, Fragment } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';
import Spinner from './Spinner';

// @todo - add image to schema for logo of company 
const builder = imageUrlBuilder(sanityClient);
const urlFor = source => {
    return builder.image(source);
}

// sort
function compare(a, b) {
    const A = a.start;
    const B = b.start;

    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
  }

const Experience = () => {
    const [experienceData, setExperience] = useState(null); // set up state
    
    // get data from sanity
    useEffect( () => {
        sanityClient.fetch(`*[_type == "experience"]{
            company,
            location,
            role,
            start,
            current,
            end,
            skills,
            order
        }`).then(data => setExperience(data)).catch(console.error);
    }, [])

    // if post is not found -> display loading
    if (!experienceData) return (<Spinner />);

    experienceData.sort(compare);

    return (
        <Fragment>
            <section className="grid grid-cols-1">
                <main className="bg-blue-800 min-h-screen p-12 rounded">
                {experienceData && experienceData.slice(0).reverse().map( (experience, index) => (
                <div className="container shadow-lg mx-auto bg-red-50 rounded-lg mb-4" key={index}>
                    <div className="h-full w-full flex name items-center justify-left pt-8 pl-6"> 
                                <h1 className="name text-xl lg:text-4xl">
                                    {experience.company}
                                </h1>
                        </div> 
                        <div className="flex justify-left text-gray-600 ml-6">
                            <p className="flex item-center justify-left pl-1 text-lg lg:text-xl">
                                <i>{experience.location}</i>
                            </p>
                        </div>
                        <hr color="gray"></hr>
                        <div className="flex justify-between items-center">
                            <p>
                            <span className="ml-9">
                                <strong className="text-lg lg:text-xl text-gray-600 text-bold font-normal"><i>Role</i></strong>:{" "}
                                <span className="text-xl lg:text-2xl text-bold name">{experience.role}</span>
                            </span>
                            </p>
                            <span class="px-2 py-1 mr-9 text-gray-900 list">{experience.start.split("-")[0] + "/" + experience.start.split("-")[1]} - {experience.current ? (<span>Current</span>) : (experience.end.split("-")[0] + "/" + experience.end.split("-")[1])}</span>
                    </div> 
                    <span className="justify-left ml-9 text-lg lg:text-xl text-gray-600"><i>Skills</i></span>:{" "}   
                    <div className="px-20 py-2 prose lg:prose-xl max-2-full">
                        {experience.skills.map( skill => (
                            <ul className="list-disc ml-1 mt-1 break-words list">
                                <li className="text-lg">{skill}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            ))}
            </main>
            </section>
        </Fragment>
    )
}

export default Experience;
