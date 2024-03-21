import React from 'react';
import galleryImage1 from '../assets/img/gallery/gallery-1.jpg';
import galleryImage2 from '../assets/img/gallery/gallery-2.jpg';
import galleryImage3 from '../assets/img/gallery/gallery-3.jpg';
import galleryImage4 from '../assets/img/gallery/gallery-4.jpg';
import galleryImage5 from '../assets/img/gallery/gallery-5.jpg';
import galleryImage6 from '../assets/img/gallery/gallery-6.jpg';
import galleryImage7 from '../assets/img/gallery/gallery-7.jpg';
import galleryImage8 from '../assets/img/gallery/gallery-8.jpg';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="container-fluid max-width-container">
        <div className="section-title">
          <h2>Some photos from <span>Our Restaurant</span></h2>
        </div>
        <div className="row g-2">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-item">
              <a href={galleryImage1}>
                <img
                  src={galleryImage1}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-item">
              <a href={galleryImage2}>
                <img
                  src={galleryImage2}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-item">
              <a href={galleryImage3}>
                <img
                  src={galleryImage3}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-item">
              <a href={galleryImage4}>
                <img
                  src={galleryImage4}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-item">
              <a href={galleryImage5}>
                <img
                  src={galleryImage5}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-item">
              <a href={galleryImage6}>
                <img
                  src={galleryImage6}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-item">
              <a href={galleryImage7}>
                <img
                  src={galleryImage7}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-item">
              <a href={galleryImage8}>
                <img
                  src={galleryImage8}
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery;
