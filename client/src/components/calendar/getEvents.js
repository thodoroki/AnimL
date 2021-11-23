import api from '../../services/api'

const seconds_minute = 60;
const minutes_hours = 60;
const miliseconds_minute = 1000;
const hours_day = 24;
const oneDayInMiliSeconds = seconds_minute * minutes_hours * miliseconds_minute * hours_day;


async function getEvents() {
    let calendarEvents = [];
    let currentDate = new Date;
    const response = await api.get('/api/favoritos')
    response.data.map((anime) => {
        if(anime.end === null){
        let newCurrentYear = currentDate.getFullYear();
        let newCurrentMonth = currentDate.getMonth() + 1;
        let newDateStartSliced = anime.start.substring(7, 24);
        let newDateStart = `${newCurrentYear}-${newCurrentMonth}${newDateStartSliced}`;
        let newDateStartFormated = new Date(newDateStart.toString())

        for (let i = -210; i < 210; i += 7) {
            const dateStartFormated = new Date((newDateStartFormated.getTime() + oneDayInMiliSeconds*i));
            calendarEvents.push({
                id: anime.id_original,
                title: anime.nome_anime,
                start: dateStartFormated,
                end: anime.end
            });
        }
    }
    });

    console.log(calendarEvents);
    return calendarEvents
}
export default getEvents;
