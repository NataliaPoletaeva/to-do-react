import React, { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState({
    newItem: null,
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.newItem.trim()) {
      setValue({
        newItem: '',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input typeof="text" placeholder="Add to do" value={value.newItem} onChange={handleChange} name="item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Input;
