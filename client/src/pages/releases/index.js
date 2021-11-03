import React, { useEffect, useState } from 'react';
import './style.css';
import Calendar from '../../components/calendar/fullCalendar';

function Releases() {
  return (
    <div className="calendar__box">
      <h1>Calendário de lançamentos</h1>
      <Calendar />
    </div>
  );
}

export default Releases;