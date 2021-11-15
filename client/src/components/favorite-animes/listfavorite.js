import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api'
import Card from '../anime/cardAnime';


async function handleDelete(animeId){
    if(window.confirm("Deseja realmente remover este anime dos seus favoritos?")){
        var result = await api.delete(`/api/favoritos/delete/${animeId}`)
        if(result.status == 200){
            window.location.href = "/favorites"
        }
    }
}

function FavoritesList() {
    const [animes, setAnimes] = useState({});
    useEffect(() => {
        async function loadAnimes() {
            const response = await api.get('/api/favoritos');
            setAnimes(response);
        }
        loadAnimes();
    }, []);    
        return (
            <div className="List">
                {animes.data && (
                    <ul className="animes-list">
                        {animes.data.map((anime, index) => (
                            <li key={index}>
                                <div className="favorite-card">
                                    <Card titulo= {anime.nome_anime}
                                        poster={anime.poster}
                                        animeId={anime.id_original}
                                    />
                                    <button className="button__remove__favorite"onClick={() => handleDelete( anime._id )} >Remover</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )};


            </div>
        );
    }

    export default FavoritesList;
