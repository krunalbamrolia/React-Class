import React from 'react';
import slidesData from './data/HeroSlider.js';

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-container max-width-container">
                <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div className="carousel-inner" role="listbox">
                        {slidesData.map((slide, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} style={{backgroundImage: `url(${slide.image})`}}>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2 className="animate__animated animate__fadeInDown"><span>{slide.title}</span></h2>
                                        <p className="animate__animated animate__fadeInUp">{slide.description}</p>
                                        <div>
                                            <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                                            <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
