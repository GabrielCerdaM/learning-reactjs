import React, { useEffect, useReducer } from 'react'
import './style.css'
import { todoReducer } from './todoReducer';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];

}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type: "delete",
            payload: todoId
        }

        dispatch(action);
        // crear action
        // dispatch
    }

    const handleToggle = (todoId) => {
        dispatch({ type: 'toggle', payload: todoId });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>Todo App: {todos.length}</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* TodoList, args[todos, handleDelete, HandleToggle ] */}
                    <ul className="list-group list-group-flush">
                        <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                        {/* {
                        // TodoListItem, todo, index, handleDelete, HandleToggle
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p 
                                        className={ `${todo.done && 'completed'}` }
                                        onClick={ () => { handleToggle(todo.id) }}
                                    >
                                        {i + 1}.- {todo.desc}
                                    </p>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={ () => { handleDelete( todo.id ) } }
                                        >
                                        Borrar
                        </button>
                                </li>
                            ))
                        } */}
                    </ul>
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}
