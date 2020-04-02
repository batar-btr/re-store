import React from 'react';
import './app.css'
import {withBookstoreService} from '../hoc'

const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks())
    return (
        <div className="App">
            <h1>Hello World</h1>
        </div>
    );
}

export default withBookstoreService()(App);