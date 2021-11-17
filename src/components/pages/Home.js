import React from 'react';

import '../../App.css';
import CarouselCover from '../pages/CarouselCover';
import CardsLayout from './CardsLayout';
import ListAnnonceComponent from './ListAnnonceComponent';

function Home () {
    return (
        <div>
            <CarouselCover/>
            <br/>
            <br/>
            <CardsLayout/>
            <br/>
            <br/>
            <ListAnnonceComponent/>
        </div>
    )
}

export default Home ;