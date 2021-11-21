import React, { useEffect, useState } from 'react';
import Card from './Cards';
import big from '../../logement.jpg';
import style from './Cards.module.css'
import {getMesAnnonce} from '../../functions/axios'



export default function Annonce() {

   const [annonces, setAnnonces] = useState([]);
    useEffect(() => {
         
        getMesAnnonce().then((response) => {
            setAnnonces(response.data)
        })
        .catch(error => {
            console.log(error);
        }) 
    }, [])
       
    return(
        <div className={style.pattern}>
            <div className={style.filter}>
                <img className={style.BigImage} src={big} alt=""  />
                <div className={style.text}>
                    <p>Gérer vous annonces...</p>
                    <span>Lorem ipsum dolor sit amet. At voluptate debitis et possimus nihil in possimus tenetur ut enim omnis.</span>
                </div>    
            </div>
            <div className={style.cardContainer}>
                { annonces.map((annonce) => 
                    <Card key={annonce.id} annonce={annonce} />)
                }
            </div> 
        </div>   
    )
}
