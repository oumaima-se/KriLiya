import React from 'react';
import './Cards.css';

function Cards({title,imageUrl,body}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src='images/img-9.jpg' alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>House number 1</h3>
                </div>
                <div className="card-body">
                    <p>This is the description of the first house displayed.</p>
                </div>
                <div className="btn">
                    <button>
                        <a href='/'>View more</a>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Cards;
