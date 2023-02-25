import { useState } from 'react';

function useFormField(initialValue, validationFn) {
  const [field, setField] = useState(initialValue);
  const [error, setError] = useState(null);

  const onChange = (newValue) => {
    const error = validationFn(newValue); // for valid value, error is null
    setError(error);
    setField(newValue);
  };

  return [field, onChange, error];
}

export default useFormField;
