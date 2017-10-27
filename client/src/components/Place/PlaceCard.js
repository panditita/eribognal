import React, { Component } from 'react';


class PlaceCard extends React.Component {
    render(props) {
        return (
            <div>
                <ul>
                    {props.data.data.children.map(places => (
                        <ul>
                            <li> Title: {props.places.title} </li>
                            <li> Description: {props.places.description} </li>
                            <li> Category:   {props.places.category} </li>
                        </ul>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PlaceCard;
