import React from 'react';

const DashboardData = ({ cartoons, onDoubleClick }) => {
  return (
    <>
      <div className="container mt-5 row col-12">
        {cartoons.map((cartoon, index) => (
          <div className="card-container col-2" key={index} onDoubleClick={() => onDoubleClick(index)}>
            <div className="card">
              <img src={cartoon.image} className="card-img-top" alt={cartoon.title} />
              <div className="card-body">
                <h5 className="card-title">{cartoon.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardData;