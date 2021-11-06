import React, { useEffect, useState } from 'react';


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
        <div className="anime-info">
            <div className="Name">
                {info.data && (
                    <div key={info.data.id}>
                        <h1>{info.data.attributes.canonicalTitle}</h1>
                        <img
                            src={info.data.attributes.posterImage.small}
                            alt={info.data.attributes.canonicalTitle}
                        />
                        <div className="info">
                            <h2>{info.data.attributes.description}</h2>
                            <h3>{info.data.attributes.synopsis}</h3>     
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Anime;