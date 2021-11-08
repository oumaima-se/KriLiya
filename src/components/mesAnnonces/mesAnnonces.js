import React, {Component} from 'react';
import Card from './Cards';
import image from '../../house.jpg';
import style from './Cards.module.css'

class Annonces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annonces:[
                {
                    title : 'Colocation',
                    Date : '12/09/2021',
                    price : '1000',
                    image : image
                },
                {
                    title : 'Colocation',
                    Date : '01/09/2021',
                    price : '2000',
                    image : image
                },
                {
                    title : 'Colocation',
                    Date : '01/09/2021',
                    price : '2000',
                    image : image
                }
            ]
        };
      }
  
    render(){
      const list =   this.state.annonces.map((annonce) => 
        <Card annonce={annonce} />
    );
        return(
            <div className={style.pattern}>
                <h1>Mes Annonces</h1> 
                <div className={style.cardContainer}>
                   { list }  
                </div> 
            </div>
            
        )
    }
}
export default Annonces;