import React from 'react';

function repeat(value, times, keyPrefix) {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(
      <React.Fragment key={`${keyPrefix}-${i}`}>value</React.Fragment>,
    );
  }

  return result;
}

export default repeat;
