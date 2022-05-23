import React from 'react';

function Title({ children }) {
  return (
    <h1 className="text-center text-primary mb-4">
      {children}
    </h1>
  );
}

export default Title;
