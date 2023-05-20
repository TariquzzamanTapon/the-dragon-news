import React from 'react';
import { FaDrawPolygon } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';


const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, author, rating, total_view, _id} = news
    
    return (
        <>
            <div className="card card-compact px-3 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions ">
                        <Link to={`/categorey/0`}>
                            <button className="btn btn-primary"><FaDrawPolygon></FaDrawPolygon>
                                View all Categorey
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;