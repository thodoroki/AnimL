import React, { useEffect, useState } from 'react';
import './listFavoritos.css';
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
            {animes.data && (
                <ul className="list--card">
                    <h1>Animes favoritos</h1>
                    {animes.data.map((anime, index) => (
                        <li key={index}>
                            <CardFavoritos titulo={anime.nome_anime}
                                poster={anime.poster}
                                animeId={anime.id_original}
                                originalId={anime._id}
                            />
                        </li>
                    ))}
                </ul>
            )};

        </div>
    );
}

export default FavoritesList;
