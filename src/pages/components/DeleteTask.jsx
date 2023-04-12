import { useDispatch } from 'react-redux';
import { deleteData } from '../globalState/features/addTodo';



export function DeleteTask (item) {

    const dispatch = useDispatch();

    const deleteCartHandle = () =>{
        dispatch(deleteData(item.id))
        console.log('delete')
    }

    return (
        <>
           <button className='btn btn-danger' onClick={deleteCartHandle}>Delete</button>
        </>
    )
}