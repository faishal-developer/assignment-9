// components/EventsByCategory.js
import style from './home.module.scss';

const EventsByCategory = ({ events }:{events:any}) => {
  return (
    <div className={style.eventContainer}>
        <section className={style.events_by_category}>
          <h2>Events by Category</h2>
          <div className={style.event_list}>
            {events.map((event:any) => (
              <div key={event.id} className={style.event_card}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <span>Date: {event.date}</span>
              </div>
            ))}
          </div>
        </section>
    </div>
  );
};

export default EventsByCategory;
