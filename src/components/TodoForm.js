import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSumit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

  return (
    <form className='todo-form' onSubmit={handleSumit}>
        <input type='text'
         placeholder='Add a todo' 
         value={input} 
         onChange={handleChange}
         name='text' 
         className='todo-input'/>
        <button className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm;