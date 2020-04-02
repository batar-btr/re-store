import React from 'react';
import icon from './error.svg'
import './error-indicator.css'

const ErrorIndicator = () => {
    return ( 
        <div className="Error-indicator">
            <img src={icon} alt="error"/>
            <p>OOoops - Something went Wrong</p>
            <p>Baaad.. baadd Muthafuka!</p>
        </div>
     );
}
 
export default ErrorIndicator;