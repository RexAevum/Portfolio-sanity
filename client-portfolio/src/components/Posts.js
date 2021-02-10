import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import sanityClient from '../client';
import { Link } from 'react-router-dom';
import stock from '../img/stock_post.png'

const Posts = props => {
    const [postData, setPostData] = useState(null);

    // 
    useEffect( () => {
        // fetch all data of type post and get the specifed fields 
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then( data => setPostData(data)).catch(console.error)
    }, []);

    console.log(postData)
    return (
        <main className="bg-blue-400 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center name">
                    My Posts
                </h1>
                <h2 className="text-lg text-grey-600 flex justify-center mb-12">
                    Check out what's new
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {postData && postData.map( (post, index) => (
                        <article>
                            <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                                <span className="block h-64 relative rounded shadow leading-snug bg-blue-50 border-l-8 border-green-400" key={index}>
                                    <img src={post.mainImage && post.mainImage.asset.url || stock} alt={post.mainImage && post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute"  />
                                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="text-grey-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 rounded">{post.title}</h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}

Posts.propTypes = {

}

export default Posts
