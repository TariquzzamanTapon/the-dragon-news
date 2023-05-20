import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Categorey = () => {
    const newsCategoreys = useLoaderData()
    return (
        <div>
            {
                newsCategoreys?.map(news=> <NewsCard news ={news}></NewsCard>)
            }
        </div>
    );
};

export default Categorey;