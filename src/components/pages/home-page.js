import React from 'react';
import BookList from '../book-list'

const HomePage = () => {
    const books = [
        {
            id:1 , 
            title: 'Js Patterns',
            author: 'Stoyan Stefanov'
        },
        {
            id:2 , 
            title: 'CSS3 Complete Guide',
            author: 'David McFarland'
        },
    ]
    return ( <BookList books={books}/> );
}
 
export default HomePage;