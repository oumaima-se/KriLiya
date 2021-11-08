import React, {Component} from 'react';
import style from './Cards.module.css';
import Swal from 'sweetalert2';
class Card extends Component {
    
    SupprimerAnnonce(){
        Swal.fire({
            title: 'Etes vous sûre?',
            text: "Vous ne pouvez pas restaurer les données! !",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#53B3CB',
            cancelButtonColor: '#F15956',
            confirmButtonText: 'OUI',
            cancelButtonText: 'NON'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                {
                    title: 'Supprimée!',
                    text: 'Votre annonce a été supprimée.',
                    icon: 'success',
                    confirmButtonColor: '#1d314a',
                    confirmButtonText: 'OK',
                }
              )
            }
          })
    }

    render(){
        return(
            <div className={style.card}>
                <div className={style.head}>
                    <div className={style.title}><span className={style.yellow}>Titre d'annonce : </span>{this.props.annonce.title}</div>
                    <div className={style.btns}>
                        <button className={style.btnMore}><i class="fas fa-info-circle"></i></button>
                        <button className={style.btnUpdate}><i class="fas fa-edit"></i></button>
                        <button className={style.btnDelete} onClick={this.SupprimerAnnonce}><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
                <div className={style.body}>
                    <img className={style.image} src={this.props.annonce.image} alt="image" />
                    <div className={style.info}>
                        <div><span className={style.light}>Date de publication : </span>{this.props.annonce.Date}</div>
                        <div><span className={style.light}>Prix : </span>{this.props.annonce.price} </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card