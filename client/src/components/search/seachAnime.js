import React, { useEffect, useState } from 'react';
import SearchTitle from './searchTitle';
import './searchBar.css'


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
      <div className="Search">
          <SearchTitle value={text} onChange={(search) => setText(search)} placeholder="Pesquisar Anime" />
          
            {info.data && (
            <div className='dataResult'>
              <ul className="animes-list">
              {info.data.map((item)=>(
                <li key={item.id}>
                  <a className='dataItem' href=''>
                    <p>{item.attributes.canonicalTitle}</p>
                  </a>
                </li>
              ))}
              </ul>
            </div>
            )}
          
        
      </div>
    )
}
  
  export default SeachAnime;

  