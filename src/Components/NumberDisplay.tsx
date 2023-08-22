import React, { useState, useEffect } from 'react';

const NumberDisplay = () => {
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [numbers, setNumbers] = useState([
    { label: 'utilisateurs !', count: 200 },
    { label: 'membres actifs !', count: 10 },
    { label: 'actions !', count: 15},
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDisplay((prevDisplay) => (prevDisplay + 1) % numbers.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [numbers.length]);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card" style={{ height: '20rem' }}> 
          <img src="..." className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-center">
              <p className="h2 card-title text-center">Notre impacte!</p>
              <p className="card-text"><div className=''>{numbers[currentDisplay].count}</div>{" "}{numbers[currentDisplay].label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberDisplay;
