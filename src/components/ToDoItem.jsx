import React from "react";

function ToDoItem(props) {
    return (
        <div>
            <li>{props.text}
                <button style={{border: "1px solid black", margin: "5px"}} onClick={() => {props.onChecked(props.id)}}>
                    Delete
                </button>
            </li>
        </div>
    );
}

export default ToDoItem



                            
                            
    