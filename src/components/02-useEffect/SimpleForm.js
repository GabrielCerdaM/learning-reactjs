import React, { useState, useEffect } from 'react'
import './effects.css'
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    })

    const { name, email } = formState;

    useEffect(() => {
        // no importa que cambie en el componente, vuelve a ejecutarlo.
        // los efectos deben ser trabajados de manera individual. useEffect({},[])
        console.log('hey');
    })

    // useEfffect se ejecuta una única vez
    useEffect(() => { }, []);

    useEffect(() => {
        console.log('useEffect se ejecuta cuando cambia el formState, la dependencia define cuando se ejecuta');
    }, [formState])

    useEffect(() => {
        console.log('useEffect se ejecuta cuando cambia la variable email');
    }, [email])


    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>
                useEffect
                <hr />

                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="name"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="email@gmail.com"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                {(name === '123') && <Message />}
            </h1>
        </>
    )

}
