
import React from 'react';
import TestimonialData from './data/TestimonialData';

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container position-relative max-width-container">
        <div
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            {TestimonialData.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="testimonial-item">
                  <img
                    src={testimonial.image}
                    className="testimonial-img"
                    alt={testimonial.name}
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.occupation}</h4>
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {testimonial.text}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
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

export default Testimonial;
