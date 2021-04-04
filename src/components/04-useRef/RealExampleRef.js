import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHooks'


export const RealExampleRef = () => {

    const [ show, setShow ] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <h1>Alfredito 😄</h1>
            <hr />

            {
                show && <MultipleCustomHook />
            }

            <button 
            className="btn btn-primary mt-5"
            onClick={ () => {
                setShow(!show);
            } }
            > { show ? 'Hide' : 'Show' } </button>
        </div>
    )
}
