import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
          <input
            placeholder='Update your item'
            type='text'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input' />
            <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm;