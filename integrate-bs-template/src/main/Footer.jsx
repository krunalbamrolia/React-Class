import React from 'react'

const Footer = () => {
    return (
        <footer id="footer">
            <div class="container">
                <h3>Pasta Cosi</h3>
                <p>
                    Pasta Cosi is specialized in Pasta with Parmigiano, Risotto, Salads &
                    Raclette
                </p>
                <div class="social-links">
                    <a href="https://www.facebook.com/pastacositn/" class="facebook"
                    ><i class="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/pastacositn/" class="instagram"
                    ><i class="bx bxl-instagram"></i></a>
                </div>
                <div class="copyright">
                    &copy; Copyright <strong><span>Pasta Cosi</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                    Designed by
                    <a href="https://github.com/ahmed-aouinti" target="_blank"
                    >Aouinti_Ahmed</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer