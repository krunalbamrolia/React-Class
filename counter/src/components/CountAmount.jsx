import React, { useState } from 'react'

function CountAmount() {
    const [prices, setPrices] = useState({
      acPrice: 33000,
      transportationPrice: 800,
      copperPipesPrice: 1500,
      waterPipesPrice: 500,
      standPrice: 200
    });
  
    const handleChange = (e, key) => {
      const { value } = e.target;
      setPrices(prevPrices => ({
        ...prevPrices,
        [key]: parseInt(value)
      }));
    };
  
    const totalAmount = Object.values(prices).reduce((acc, curr) => acc + curr, 0);
  
    return (
      <div>
        <h2>Order Form</h2>
        {Object.entries(prices).map(([key, value]) => (
          <div key={key}>
            <label>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</label>
            <input type="number" value={value} onChange={(e) => handleChange(e, key)} />
          </div>
        ))}
        <div>
          <h3>Total Amount: {totalAmount}</h3>
        </div>
      </div>
    );
  }

export default CountAmount