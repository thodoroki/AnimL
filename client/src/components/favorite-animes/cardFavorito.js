import React from 'react';
import './card.css';

export default function CardAnime(props){
    return (
        <div className="card">
            <img src={props.poster} alt=""></img>
            <div className="card--info">
                <h3>{props.titulo}</h3>
                <button>Remover</button>
            </div>
            
        </div>
    );
}