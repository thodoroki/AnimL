import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api'
import CardFavoritos from './cardFavorito';

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
                {animes.data &&(
                <section className="list--card">
                    <h1>Favoritos</h1>
                    {animes.data.map((anime, index) => (
                        <div key={index}>
                            <CardFavoritos 
                                titulo= {anime.nome_anime}
                                poster={anime.poster}
                                animeId={anime.id_original}>
                            </CardFavoritos>
                        </div>
                    ))}
                </section> 
                )}
   
            </div>
        );
    }

    export default FavoritesList;
