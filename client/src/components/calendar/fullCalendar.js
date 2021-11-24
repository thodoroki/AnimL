import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './fullCalendar.css';
import getEvents from './getEvents'

var calendarEvents = getEvents;//Essa variavel tem que receber a lista de eventos, nao consigo puxar do getEvents.js
console.log(calendarEvents);
export default class calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title'
        }}
        initialView=''
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={calendarEvents}
        eventClick={this.handleEventClick}
        eventsSet={this.handleEvents}
      />
    )
  }
  handleEventClick = (clickInfo) => {
    window.location.href = `/anime/${clickInfo.event._def.publicId}`;
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }
}