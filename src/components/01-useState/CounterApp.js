import React, { useState } from 'react'
import './CounterApp.css'


export const CounterApp = () => {

    const [ state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        counter5: 50,
    })

    const { counter1, counter2 } = state;

    // console.log(counter);
        return (
            <>
             <h1> Counter1 { counter1 } </h1>
             <h1> Counter2 { counter2 } </h1>
             <hr />

             <button 
             className="btn btn-primary"
             onClick={ () => {
                 setState(
                     {
                         ...state,
                         counter1 : counter1 + 1 ,
                         counter2 : counter2 + 1
                    });
             } }
             >
                 +1
             </button>
            </>
        )
}
