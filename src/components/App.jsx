import React, { useState } from 'react'


function App() {

    const [add, setAdd] = useState("")
    const [inputText, setInputText] = useState([]);

    function handleClick() {
        !(add.length === 0 || !add.trim()) &&
            setInputText([
                ...inputText, 
                { id: crypto.randomUUID(), add: add}
            ])
        setAdd("")

    };
    
    function handleChange(event) {
        setAdd(event.target.value)    
        event.preventDefault()
    };

    return(
        <div className='container'>
            <div className="heading">
                <h1>To-Do-List</h1>
            </div>
            <div className="form">
                <input type="text" onChange={handleChange} value={add}/>
                <button onClick={handleClick}>
                    <span>Add</span>
                </button>
                
            </div>
            <div>
                <ul>
                    {inputText.map(newNote => (
                        <li key={newNote.id}>
                            {newNote.add} 
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}

export default App
