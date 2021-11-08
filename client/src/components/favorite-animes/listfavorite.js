import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api'
import Card from '../anime/cardAnime';

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
                                <Card titulo= {anime.nome_anime}
                                    poster={anime.poster}
                                    animeId={anime.id_original}
                                    />
                            </li>
                        ))}
                    </ul>
                )};


            </div>
        );
    }

    export default FavoritesList;
