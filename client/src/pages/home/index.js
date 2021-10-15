import React, { useEffect, useState } from 'react';
import './style.css';
import AnimeList from '../../components/anime/listTrending';
import SearchAnime from '/home/epaminondas/Documents/AnimL/client/src/components/search/seachAnime';

function Home() {
  return (
    <div className="Home">
      <h1>Animes</h1>
      <SearchAnime/>
      <AnimeList />
    </div>
  );
}

export default Home;