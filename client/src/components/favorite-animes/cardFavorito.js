import React from 'react';
import './card.css';
import api from '../../services/api'

async function handleDelete(animeId) {
    if (window.confirm("Deseja realmente remover este anime dos seus favoritos?")) {
        var result = await api.delete(`/api/favoritos/delete/${animeId}`)
        if (result.status == 200) {
            window.location.href = "/favorites"
        }
    }
}

export default function CardAnime(props){
    return (
        <div className="card">
            <img src={props.poster} alt=""></img>
            <div className="card--info">
                <h3>{props.titulo}</h3>
            </div>
            <button className="button__remove__favorite"onClick={() => handleDelete( props.originalId )} >Remover</button>
            
        </div>
    );
}