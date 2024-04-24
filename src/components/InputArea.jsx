import React, { useState } from "react";


function InputArea(props) {
    const [add, setAdd] = useState("")

    function handleChange(event) {
        setAdd(event.target.value)    
        event.preventDefault()
    };

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={add} />
            <button onClick={() => {
                props.addOn(add);
                setAdd("");
            }}>
            <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
