import React, { useEffect, useState } from 'react';
import SearchTitle from './searchTitle';

function SeachAnime() {
    const [text, setText] = useState('');
    const [info, setInfo] = useState({});
  
    useEffect(() => {
      if(text){
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
            .then((response) => response.json())
            .then((response) =>{
              setInfo(response)
            });
      }
    }, [text]);
    
    return (
      <div className="Seach">
        <h2>Pesquisar Anime:
          <SearchTitle value={text} onChange={(search) => setText(search)} />
        </h2>
        {info.data && (
          <ul className="animes-list">
          {info.data.map((item)=>(
            <li key={item.id}>
              {item.attributes.canonicalTitle}
            </li>
          ))}
          </ul>
          )}
      </div>
    );
  }
  
  export default SeachAnime;