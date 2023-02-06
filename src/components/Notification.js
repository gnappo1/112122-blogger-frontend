import {useEffect, useContext} from 'react'
import { ErrorContext } from '../context/errorContext';

const Notification = () => {
    const {error, setError} = useContext(ErrorContext)
    
    useEffect(() => {
        const timer = setTimeout(()=> {
            setError({type: "", text: ""})
        }, 3000)
        return () => {
            clearTimeout(timer)
        };
    }, [error, setError]);

  return (
    <div className={error.type}>
        {error.text}
    </div>
    )
}

export default Notification