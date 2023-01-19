import React from 'react';

const Quote = () => {
  const myStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
  };

  return (
    <div style={myStyle}>
      <h2>
        Mathematics is not about numbers, equations, computations
        or algorithms: it is about understanding.- William Paul Thurston
      </h2>
    </div>
  );
};
export default Quote;
