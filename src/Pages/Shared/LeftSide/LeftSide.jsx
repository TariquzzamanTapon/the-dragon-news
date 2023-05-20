import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://the-dragon-news-server-tariquzzamantapon.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            {
                categories?.map(categorie => <Link className='block'
                    to={`/categorey/${categorie.id}`} 
                    key={categorie.id}>
                        {categorie.name}</Link>) 
            }
        </div>
    );
};

export default LeftSide;