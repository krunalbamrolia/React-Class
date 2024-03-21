import React from 'react';
import eventsData from './data/EventData.js';

const Events = () => {
    return (
        <section id="events" className="events">
            <div className="swiper-container max-width-container">
                <div className="section-title">
                    <h2>Organize Your <span>Events</span> in our Restaurant</h2>
                </div>

                <div className="events-slider swiper">
                    <div className="swiper-wrapper">
                        {eventsData.map((event, index) => (
                            <div key={index} className="swiper-slide">
                                <div className="row event-item">
                                    <div className="col-lg-6 d-lg-flex align-items-center">
                                        <img
                                            src={event.image}
                                            className="img-fluid"
                                            alt={event.title}
                                        />
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                        <h3>{event.title}</h3>
                                        <div className="price">
                                            <p><span>{event.price}</span></p>
                                        </div>
                                        <p className="fst-italic">{event.description}</p>
                                        <ul>
                                            {event.details.map((detail, index) => (
                                                <li key={index}><i className="bi bi-check-circle"></i> {detail}</li>
                                            ))}
                                        </ul>
                                        <p>{event.additionalInfo}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default Events;
