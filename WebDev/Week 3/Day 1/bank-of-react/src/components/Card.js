import React from 'react';
import './Card.css';

function Card ({description, amount, date}){
    return(
        <div className="Card">
            <div className="Body">
                Description: {description}
                <br></br>
                Amount: {amount}
                <br></br>
                Date: {date}
            </div>
        </div>
    )
}

export default Card;