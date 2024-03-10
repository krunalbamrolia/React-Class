import React, { useState } from 'react';

const DashboardData = ({ cartoons, onDoubleClick, onDelete }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="container mt-5 row col-12">
        {cartoons.map((cartoon, index) => (
          <div
            className="card-container col-2"
            key={index}
            onDoubleClick={() => onDoubleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card">
              <img src={cartoon.image} className="card-img-top" alt={cartoon.title} />
              <div className="card-body">
                <h5 className="card-title">{cartoon.title}</h5>
                {hoveredIndex === index && (
                  <button
                    className="btn btn-danger"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      border: 'none',
                      borderRadius: '50%',
                      cursor: 'pointer'
                    }}
                    onClick={() => onDelete(index)}
                  >
                    X
                  </button>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardData;
