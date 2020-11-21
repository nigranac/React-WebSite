import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.style.css';

const NewsCard = (news) => {
    // console.log(news);
    return (
        <div className = 'card-wrapper'>
            <img src = {news.urlToImage} style = {{height: 85}}></img>
            <h1>{news.title}</h1>
            {/* <p>{news.description}</p> */}
        </div>
    )
}

export default NewsCard;