import React from 'react';
import './card.css';

export default function CardSerie(props){
    return (
        <div className="card-serie">
            <div className="card-effect">
                <span className="material-icons fav-btn">add_circle_outline</span>
                <img className="poster-image" 
                    src={props.poster}/>
                <div className="card-datail">
                    <h1>{props.titulo}</h1>
                    
                </div>
            </div>
        </div>
    );
}