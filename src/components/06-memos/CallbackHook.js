import React, { useState, useCallback, useEffect } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState( 10 );

    // const increment = (num) => {
    //     setCounter(counter + num);
    // }

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num);            
        },
        [ setCounter ],
    )

    useEffect(() => {
        //??? es recomendable usar useCallBack porque sino el efecto
        // se volvería a ejecutar cuando se vuelva a generar el componente
    }, [increment])

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement  increment={ increment }/>
        </div>
    )
}
