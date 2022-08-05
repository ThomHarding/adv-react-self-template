import { useState } from 'react';

export function useForm() {
  //set "data" in state whenever the form's value changes
  const [data, setData] = useState({});

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: getValue(target),
    });
  };

  return [data, handleChange];
}

function getValue({ value, type, checked }) {
  //returns whether a checkbox is checked or not
  //or just a form's value
  if (type === 'checkbox') return checked;
  return value;
}
