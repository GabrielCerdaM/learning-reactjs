import React, { useLayoutEffect, useRef, useState } from 'react'
import './layout.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const Layout = () => {

    const { counter, increment } = useCounter();

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setboxSize] = useState({});

    useLayoutEffect(() => {
        setboxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={pTag}
                > {quote} </p>
            </blockquote>

            <pre> { JSON.stringify(boxSize) } </pre>

            <button
                className="btn btn-primary"
                onClick={increment}
            >Siguiente quote</button>
        </div>
    )
}
