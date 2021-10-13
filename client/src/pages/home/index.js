import React, { useEffect, useState } from 'react';
import './style.css';
import AnimeList from '../../components/anime/listTrending';
function Home() {    
    return (
      <div className="Home">
        <h1>Animes</h1>
        <AnimeList />
      </div>
    );
}
  
export default Home;
  