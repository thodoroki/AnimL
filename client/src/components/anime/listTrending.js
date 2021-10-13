import React, { useEffect, useState } from 'react';
import './styles.css';

function AnimeList() {
    const [info, setInfo] = useState({});
    useEffect(()=>{
      fetch('https://kitsu.io/api/edge/trending/anime')
          .then((response) => response.json())
          .then((response) =>{
            setInfo(response);
          });
    }, []);

    return (
      <div className="List">
        {info.data && (
          <ul className="animes-list">
            {info.data.map((anime) => (
              <li testid="anime" key={anime.id}>
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                />
                {anime.attributes.canonicalTitle}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}
  
export default AnimeList;
  