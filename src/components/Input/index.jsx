import React, { useState } from 'react';
import p from 'prop-types';

export const Input = ({ valueInput }) => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    // Verifique se valueInput é uma função antes de chamá-la
    if (typeof valueInput === 'function') {
      valueInput(newValue);
    }
  };

  return <input type="number" value={value} onChange={handleChangeValue} />;
};

Input.propTypes = {
  valueInput: p.func, // Alterado para p.func
};
