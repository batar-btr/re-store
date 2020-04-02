import React from 'react';
import './app.css'
import ErrorBoundary from '../error-boundary'
import  BooksoreService from '../../services/bookstore-service'
import { BookstoreServiceProvider } from '../bookstore-service-context'


const App = () => {
    return (
        <ErrorBoundary>
            <BookstoreServiceProvider>
                <div className="App">
                    <h1>Hello World</h1>
                </div>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    );
}

export default App;