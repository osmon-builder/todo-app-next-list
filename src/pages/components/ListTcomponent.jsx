import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import {DeleteTask} from '../components/DeleteTask'


export function ListComponent(){
    const data = useSelector(state => state.data.data)

    useEffect(() => {
 
    }, [data])

    return (
        <>
                <ul className='list-unstyled'>
                    {data.map( (item) => (
                        
                        <li key={item.title}>
                             <h1 >{item.title}</h1>
                             <div >
                                        <div >{item.description}</div>
                                    </div>
                                  <DeleteTask/>
                        </li>
                        
                    ))}
               
                  
                </ul>
          
        </>
    )
}