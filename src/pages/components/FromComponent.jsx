import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoList } from '../globalState/features/addTodo'



export const FromComponent = () => {

    const [todo, setTodo] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodoList(todo))
        setTodo({
            title:'',
            description: ''
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input name="title" tyep="text" placeholder='text' onChange={handleChange}  value={todo.title}/>
            <textarea name="description" placeholder="Descripcion" onChange={handleChange} value={todo.description}/>
            <button type='submit'>Agregar</button>
        </form>
  
        </>
    )
}
