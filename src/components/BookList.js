import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import {BookContext} from '../contexts/BookContext'
const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const {books} =useContext(BookContext)
    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {
                    books.map(book =>{
                        return(
                            <li style={{ background: theme.ui }} key={book.id}>{book.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BookList