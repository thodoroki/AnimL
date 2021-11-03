import React, { useEffect, useState } from 'react';
import './style.css';
import AnimeList from '../../components/anime/listTrending';
import SearchAnime from '../../components/search/seachAnime';
import Calendar from '../../components/calendar/fullCalendar';

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