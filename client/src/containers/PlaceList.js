import React, { Component } from 'react';
import axios from 'axios';
import PlaceCard from '../components/Place/PlaceCard';
import apiClient from '../helpers/apiClient';

class PlacesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: []
        };
    }

    componentDidMount() {
        apiClient.getPlaces()
            .then(({ data }) => {
                this.setState({
                    places: data
                });
            })
            .catch((err) => { })    
    }

    render() {
        return (
            <div>
                {
                    this.state.places.map((place) => {
                        return (
                            <PlaceCard place = { place } />
                        )
                    })
                }

             
            </div>
        )
    }
}

export default PlacesList; 