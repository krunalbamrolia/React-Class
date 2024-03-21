import React from 'react';
import menuData from './data/MenuData.js';

const Menu = () => {
    return (
        <section id="menu" className="menu section-bg">
            <div className="container max-width-container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Menu</h2>
                    <p>Check Our Tasty Menu</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-drinks">Drinks</li>
                            <li data-filter=".filter-salads">Salads</li>
                            <li data-filter=".filter-specialty">Specialty</li>
                        </ul>
                    </div>
                </div>

                <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
                    {menuData.map((item, index) => (
                        <div key={index} className={`col-lg-6 menu-item filter-${item.category.toLowerCase()}`}>
                            <img src={item.image} className="menu-img" alt={item.name} />
                            <div className="menu-item-details">
                                <div className="menu-content">
                                    <a>{item.name}</a><span>{item.price}</span>
                                </div>
                                {item.ingredients && (
                                    <div className="menu-ingredients">{item.ingredients}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Menu;
