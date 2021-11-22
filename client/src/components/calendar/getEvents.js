import React, { useEffect, useState } from 'react';
import api from '../../services/api'

var calendarEvents =[];

function FavoritesListEvents() {
    const [animes, setAnimes] = useState({});
    useEffect(() => {
        async function loadAnimes() {
            const response = await api.get('/api/favoritos');
            setAnimes(response);
        }
        loadAnimes();
    }, []);
    animes.data.map((anime) => {
        calendarEvents.push({
            id: anime.id_original,
            title: anime.nome_anime,
            start: anime.createdAt,
            end: anime.createdAt
            });
    });
    return calendarEvents;
}

export default FavoritesListEvents;
