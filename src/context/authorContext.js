import React from 'react'
import { useState, useEffect, createContext } from 'react'

const AuthorContext = createContext()

const AuthorProvider = ({children}) => {
    const [authors, setAuthors] = useState([]);

    // const getAuthors = () => {
    //     fetch("http://localhost:3000/authors")
    //     .then(res => res.json())
    //     .then(setAuthors)
    //     .catch(err => alert(err))
    // }

    useEffect(() => {
        fetch("http://localhost:3000/authors")
        .then(res => res.json())
        .then(setAuthors)
        .catch(err => alert(err))
    }, []);

    return (
        <AuthorContext.Provider value={{authors, setAuthors}}>
            {children}
        </AuthorContext.Provider>
    )
}

export {AuthorContext, AuthorProvider}