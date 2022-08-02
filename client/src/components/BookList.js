import React from 'react'
import { gql, useQuery } from '@apollo/client';

const getBooksQuery = gql`
    query getBooks {
        books{
            name
            genre
            id
    }
}
`
const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);

    return (
        <div>
            <span>BookList</span>
            <ul>
                {!loading && data.books.map((dataobj) => <li>{dataobj.name}</li>)}
            </ul>
        </div>
    )
}

export default BookList