import React from 'react'

const TopBar = () => {
    return (
        <section id="topbar" className="d-flex align-items-center fixed-top topbar-transparent" >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start" >
                <i className="bi bi-phone d-flex align-items-center" ><span>+216 53 283 233</span></i>
                <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Thu: 12:00 AM - 23:00 PM</span></i>
                <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Fri-Sun: 12:00 AM - 00:00 PM</span></i>
            </div>
        </section>
    )
}

export default TopBar