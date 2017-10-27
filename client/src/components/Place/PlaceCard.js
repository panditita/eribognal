import React, { Component } from 'react';

const PlaceCard = props => {
    return (
        <div>
            <ul>
                <li> Title: {props.title} </li>
                <li> Description: {props.description} </li>
                <li> Category:   {props.category} </li>
            </ul>
        </div>
    )
}

export default PlaceCard;
