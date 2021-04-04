import React from 'react'
import '../../components/02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustomHook = () => {

    const { counter, increment } = useCounter();

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading ?
                    (
                        <div>
                            Loading...
                        </div>

                    ) :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{ quote } </p>
                            <footer className="blockquote-footer"> { author }</footer>
                        </blockquote>
                    )

            }

            <button 
            className="btn btn-primary"
            onClick={ increment }
            >Siguiente quote</button>
        </div>
    )
}
