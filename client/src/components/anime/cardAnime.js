import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

export default function CardSerie(props){
    return (
        <div className="card-serie">
            <Link to={`/anime/${props.animeId}`} className="detail">
                <div className="card-effect">
                    <span className="material-icons fav-btn">add_circle_outline</span>
                    <img className="poster-image" 
                        src={props.poster}/>
                    <div className="card-datail">
                        <h1>{props.titulo}</h1>      
                    </div>
                </div>
            </Link>
        </div>
    );
}