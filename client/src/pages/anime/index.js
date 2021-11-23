import React, { useEffect, useState } from 'react';
import './style.css';
import AnimePage from '../../components/anime/animePage';

function Anime(props) {
    const { animeId } = props.match.params;

    const [info, setInfo] = useState({});
    useEffect(()=>{
      fetch(`https://kitsu.io/api/edge/anime/${animeId}`)
          .then((response) => response.json())
          .then((response) =>{
            setInfo(response);
          });
    }, []);

    return (
        <div className="anime--page">    
            {info.data && (
                <AnimePage 
                animeId={animeId}
                poster={info.data.attributes.posterImage.small}
                nome={info.data.attributes.canonicalTitle} 
                average={info.data.attributes.averageRating}
                synopsi={info.data.attributes.synopsis}
                coverImage={info.data.attributes.coverImage.original}
                start={info.data.attributes.startDate}
                end={info.data.attributes.endDate}
                />
            )}
            
        </div>
    );
}

export default Anime;