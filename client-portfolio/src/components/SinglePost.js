import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import PropTypes from 'prop-types';
import sanityClient from '../client';
import stock from '../img/code_wall.jpg';
import BlockContent from '@sanity/block-content-to-react';
import Spinner from './Spinner';

// geting url for image
const builder = imageUrlBuilder(sanityClient);
const urlFor = source => {
    return builder.image(source);
}

const SinglePost = props => {
    const [singlePost, setSinglePost] = useState(null); // set up state
    const { slug } = useParams(); // use the passed params and pull out the slug

    // get data from sanity
    useEffect( () => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            publishedAt,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then(data => setSinglePost(data[0])).catch(console.error);
    }, [slug])

    // if post is not found -> display loading
    if (!singlePost) return (<Spinner />);
    return (
        <main className="bg-blue-400 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-blue-100 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-90 rounded p-12">
                            <h1 className="name text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
                            <div className="flex flex-nowrap justify-center text-grey-800">
                                {/* The following code will display image AND allow foreasy editing of the image */
                                singlePost.authorImage && (
                                    <img src={urlFor(singlePost.authorImage).url()}
                                    alt={singlePost.name}
                                    className="inline sm:mt-1 w-10 h-12 sm:w-auto rounded-full" />
                                )}
                                <p className="name item-center pl-2 pt-2 text-2xl break-normal whitespace-nowrap">
                                    {singlePost.name}
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={singlePost.mainImage ? singlePost.mainImage.asset.url : stock}
                    alt={singlePost.name}
                    className="w-full h-full object-cover rounded-t"
                    style={{ height: "400px" }} />
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-2-full">
                    <BlockContent blocks={singlePost.body} projectId="vl3zfjoo" dataset="production" />
                </div>
            </article>
        </main>
    )
}

SinglePost.propTypes = {

}

export default SinglePost
