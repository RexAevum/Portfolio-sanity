import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import PropTypes from 'prop-types';
import sanityClient from '../client';
import stock from '../img/code_wall.jpg';
import BlockContent from '@sanity/block-content-to-react';
import Spinner from './Spinner';
import { ProjectId } from '../default';

// @todo - add image to schema for diploma / proof of completion
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

const Education = props => {
    const [educationData, seteducation] = useState(null); // set up state
    
    // get data from sanity
    useEffect( () => {
        sanityClient.fetch(`*[_type == "education"]{
            school,
            degree,
            fieldofstudy,
            honors,
            start,
            end,
            current
        }`).then(data => seteducation(data)).catch(console.error);
    }, [])

    // if post is not found -> display loading
    if (!educationData) return (<Spinner />);
    educationData.sort(compare);

    return (
        <Fragment>
            <section className="grid grid-cols-1">
            <main className="bg-blue-800 min-h-screen p-12">
                {educationData && educationData.slice(0).reverse().map( (education, index) => (
                <div className="container shadow-lg mx-auto bg-green-50 rounded-lg">
                    <div className="h-full w-full flex name items-center justify-left pt-8 pl-6"> 
                                <h1 className="name text-xl lg:text-4xl">
                                    {education.school}
                                </h1>
                        </div> 
                        <div className="flex justify-between items-center">
                            <p>
                            <span className="ml-9">
                                <span className="text-xl lg:text-2xl text-bold name">{education.degree} - {education.fieldofstudy}</span>
                            </span>
                            </p>
                            <span class="px-2 py-1 mr-9 text-gray-900 list">{education.start.split("-")[0] + "/" + education.start.split("-")[1]} - {education.current ? (<span>Current</span>) : (education.end.split("-")[0] + "/" + education.end.split("-")[1])}</span>
                        </div>
                        <div>

                        </div> 
                    <span className="justify-left ml-9 text-lg lg:text-xl text-gray-600"><i>Standouts</i></span>:{" "}   
                    <div className="px-20 py-2 prose lg:prose-xl max-2-full text-lg list">
                        <BlockContent blocks={education.honors} projectId={ProjectId} dataset="production"/>
                    </div>
                </div>
                ))}
            </main>
            </section>
        </Fragment>
    )}

    export default Education;