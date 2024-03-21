import React from 'react'

const Contact = () => {
  return (
    <section id="contact" class="contact">
        <div class="container max-width-container">
          <div class="section-title">
            <h2><span>Contact</span> Us</h2>
            <p>Show Our Location Map.</p>
          </div>

          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.7145493735677!2d10.229448658237272!3d36.83219814181207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3592f6b307ef%3A0x51300af62a745953!2sPasta%20Cosi!5e0!3m2!1sfr!2stn!4v1652455428154!5m2!1sfr!2stn"
              width="100%"
              height="350"
              style={{border: 0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> 
        </div>

        <div class="container mt-5 max-width-container">
          <div class="info-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6 info">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Lake Constance Street<br />1053 Tunis, Tunisia</p>
              </div>

              <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <i class="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>Monday-Thursday:<br />12:00 AM - 23:00 PM</p>
                <p>Friday-Sunday:<br />12:00 AM - 00:00 PM</p>
              </div>

              <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>pastacosi@example.com</p>
              </div>

              <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>(+216) 53 283 233</p>
              </div>
            </div>
          </div>

          <form role="form" class="email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div class="text-center">
              <button type="reset">Send Message</button>
            </div>
          </form>
        </div>
      </section>
  )
}

export default Contact