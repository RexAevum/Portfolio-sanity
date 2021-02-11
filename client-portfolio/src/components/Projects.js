import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import sanityClient from '../client';
import stock from '../img/stock_post.png';


const Projects = props => {
    const [projectData, setProjectData] = useState(null);

    // fetch the data from sanity
    useEffect( () => {
        // type is the name of the schema object
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            tech,
            description,
            projectType,
            link,
            github,
            tags,
            image{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then( data => setProjectData(data)).catch(console.error);
    }, [])
    

    return (
        <main className="bg-blue-400 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center name">My Projects</h1>
                <h2 className="text-lg text-grey-600 flex justify-center mb-12">Check Out Some Of My Projects</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map( (project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-red-50" key={index}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-blue-50 " key={index}>
                            <img src={project.image && project.image.asset.url || stock} alt={project.image && project.image.alt} className="w-full h-full rounded-r object-cover absolute"  />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4"></span>
                        </span>
                        {project.link ? (
                            <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-red-700">
                                <a 
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                >{project.title}</a>
                            </h3>
                        ) : (
                            <h3 className="text-grey-800 text-3xl font-bold mb-2">
                                {project.title}
                            </h3>
                        )}

                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleString().substring(0, new Date(project.date).toLocaleString().indexOf(","))}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <span>
                                <strong className="font-bold">Github Link</strong>:{" "}
                                <a href={project.github} rel="noopener noreferrer" target="_black" className="text-gray-500 font-bond hover:underline hover:text-red-300" >
                                     {project.title}
                                    <span role="img" aria-label="right pointer"> ➡️</span>
                                </a>
                            </span>
                            <p className="inset-y-0 left-0 p-2">
                                <span>
                                    <strong className="font-bold">Technologies Used</strong>:{" "}
                                    {project.tech ? project.tech : "Not Specified"}
                                </span>
                            </p>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            {project.link && (
                                <a href={project.link} rel="noopener noreferrer" target="_black" className="text-lg text-red-500 font-bond hover:underline hover:text-blue-300" >
                                    View The Project Live
                                    <span role="img" aria-label="right pointer"> ➡️</span>
                                </a>
                            )}
                            <span></span>
                        </div>
                    </article>
                    ))}
                   
                </section>
            </section>
        </main>
    )
}

Projects.propTypes = {

}

export default Projects
