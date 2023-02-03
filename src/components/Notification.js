import {useEffect} from 'react'

const Notification = ({error, setError}) => {

    useEffect(() => {
        const timer = setTimeout(()=> {
            setError({type: "", text: ""})
        }, 3000)
        return () => {
            clearTimeout(timer)
        };
    }, [error]);

  return (
    <div className={error.type}>
        {error.text}
    </div>
    )
}

export default Notification