import React from 'react';
import aboutVideo from '../assets/video/about.mp4';
import aboutPoster from '../assets/img/logo/logo.jpeg';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container-fluid max-width-container">
                <div className="row">
                    <div className="col-lg-5 align-items-stretch video-box">
                        <video width="270" height="480" preload="none" controls muted poster={aboutPoster} src={aboutVideo}></video>
                    </div>

                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                        <div className="content">
                            <h3>Discover <strong>OUR HISTORY</strong></h3>
                            <p>
                                Pasta Cosi is an Italian restaurant in Tunis, les Berges du
                                Lac I. Embark on a gastronomic journey around the flavors of
                                overseas. Our chef offers a variety of pastas, risottos but
                                also raclette.
                            </p>
                            <p className="fst-italic">WHAT you will taste at our place :</p>
                            <ul>
                                <li><i className="bx bx-check-double"></i> Pasta with Parmigiano (White Sauce & Red Sauce).</li>
                                <li><i className="bx bx-check-double"></i> Risottos.</li>
                                <li><i className="bx bx-check-double"></i> Salads.</li>
                                <li><i className="bx bx-check-double"></i> Raclette.</li>
                            </ul>
                            <p> Choose your pasta (Spaghetti, Penne, Farfalle, Tagliatelle) and it is served after dipping in a wheel of parmigiano. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
