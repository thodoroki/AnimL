import React, { useEffect, useState } from 'react';
import './style.css';
import AnimeList from '../../components/anime/listTrending';
import Calendar from '../../components/calendar/fullCalendar';

function Home() {
  return (
    <div className="Home">
      <AnimeList />
    </div>
  );
}

export default Home;