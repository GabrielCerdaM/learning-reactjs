import React from 'react'

import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {

    return (
        <ul className="list-group list-group-flush">
            {
                // TodoListItem, todo, index, handleDelete, HandleToggle
                todos.map( (todo, i) => (
                    < TodoListItem
                    key={todo.id}
                    todo={ todo }
                    index={ i }
                    handleToggle={ handleToggle }
                    handleDelete={ handleDelete }
                    />
                ))

        //             <li
        //                 key={todo.id}
        //                 className="list-group-item"
        //             >
        //                 <p
        //                     className={`${todo.done && 'completed'}`}
        //                     onClick={() => { handleToggle(todo.id) }}
        //                 >
        //                     {i + 1}.- {todo.desc}
        //                 </p>
        //                 <button
        //                     className="btn btn-danger"
        //                     onClick={() => { handleDelete(todo.id) }}
        //                 >
        //                     Borrar
        // </button>
        //             </li>
            }
        </ul>

    )
}