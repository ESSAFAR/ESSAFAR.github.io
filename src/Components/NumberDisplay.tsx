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
    <div className="container mt-4 mx-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card" style={{ height: '30rem' }}> 
            <div className="card-body d-flex flex-column justify-content-center ">
              <p className="h2 card-title text-center text-primary-emphasis pb-5">Notre impacte!</p>
              <p className="card-text text-center border border-primary py-5 mx-5 px-0"><div className='display-1 '>{numbers[currentDisplay].count}</div>{" "}{numbers[currentDisplay].label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberDisplay;
