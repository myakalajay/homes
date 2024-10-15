import React from 'react';

function Dashrates() {
  const { rates } = location.state || {};

  return (
    <div>
      <h1>Rates Information</h1>
      {rates ? (
        <div>
          <p>Rate 1: {rates.path}</p>
          <p>Rate 2: {rates.location}</p>
        </div>
      ) : (
        <p>No rates available</p>
      )}
    </div>
  );
}

export default Dashrates;

