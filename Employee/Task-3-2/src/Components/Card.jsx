import React from 'react';

const Card = ({ title, description, image, buttonText }) => {
    return (
        <div className="card">
            <img src={image}  className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <button className="card-button">{buttonText}</button>
            </div>
        </div>
    );
};

export default Card;