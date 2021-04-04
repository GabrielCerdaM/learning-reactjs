import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        console.log('ref',inputRef);
        document.querySelector('input').select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <br/>

            <input
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
                ref={ inputRef }
                >Focus</button>
        </div>
    )
}
