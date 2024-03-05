import React from 'react';

const DashboardData = ({ cartoons }) => {
  return (
    <>
      <div className="container mt-5 row">
        {cartoons.map((cartoon, index) => (
            <>
          <div className="card-container" key={index}>
            <div className="card">
              <img src={cartoon.image} className="card-img-top" alt={cartoon.title} />
              <div className="card-body">
                <h5 className="card-title">{cartoon.title}</h5>
                <p className="card-text">{cartoon.description}</p>
              </div>
            </div>
          </div>
          <div className="mx-3"></div>
          </>
        ))}
      </div>
    </>
  );
};

export default DashboardData;


