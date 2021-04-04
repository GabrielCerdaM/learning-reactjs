import React from 'react'
import { useCounter } from '../../hooks/useCounter'


export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset } = useCounter(100);

    return (
        <div>
            <h1>
                Counter with hook: { state }
                <hr />

                <button className="btn btn-primary mx-3"
                    onClick= { increment }
                >
                    +1
                </button>
                <button className="btn btn-primary mx-3"
                    onClick= { reset }
                >
                    reset
                </button>
                <button className="btn btn-primary"
                    onClick= { decrement }
                >
                    -1
                </button>
            </h1>
        </div>
    )
}

export default CounterWithCustomHook
