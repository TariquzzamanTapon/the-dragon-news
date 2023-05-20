import moment from 'moment';
import React from 'react';
import { FaEye, FaRegBookmark, FaRegStar, FaShare, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    
    const { title, details, image_url, author, rating, total_view,_id } = news;
    return (
        <>
            <div className="card card-compact px-2 mb-10 shadow">
                <div className='py-2 '>
                    <div className='flex justify-between bg-slate-300 p-3'>
                        <div className="flex items-center">
                            <div>
                                <img className='rounded-full' style={{ width: "40px" }} src={author?.img} alt="" />
                            </div>
                            <div>
                                <p>{author?.name ? author?.name : "Shakib Khan"}</p>
                                <p>{moment(author?.published_date).format("YYYY-DD-MM")}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <FaShare></FaShare>
                            <FaRegBookmark></FaRegBookmark>
                        </div>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <div className="card-body">
                        <figure><img src={image_url} alt="Shoes" /></figure>
                        <p>
                            {details.length < 250 ?
                                <>{details}</>
                                : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} className='underline'>read more</Link></>}
                        </p>
                    </div>
                </div>

                {/* footer */}
                <div className='flex bg-slate-300 p-3 items-center justify-between'>
                    <div>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            readonly
                        />
                        <span>{rating?.number}</span>
                    </div>
                    <p className='flex items-center'><FaEye></FaEye> {total_view}</p>
                </div>
            </div>
        </>
    );
};

export default NewsCard;