import React, { useEffect, useState } from 'react';
import './styles.css';

import Card from './cardAnime';

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
                <Card titulo={anime.attributes.canonicalTitle} 
                poster={anime.attributes.posterImage.small}
                />
              </li>
            ))}
          </ul>
        )};
       
        
      </div>
    );
}
  
export default AnimeList;
  