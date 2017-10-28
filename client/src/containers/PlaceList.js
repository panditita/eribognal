import React, { Component } from 'react';
import axios from 'axios';
import PlaceCard from '../components/Place/PlaceCard';

class PlacesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: []
        };
    }

    componentDidMount() {
        axios.get('http://eribognal-server.herokuapp.com/api/questions')
            .then(({ res }) => {
                this.setState({
                    places: res.data.places
                });
            })
            .catch((err) => { })

    }

    render() {
        const place = this.state.places.map((value, index) => {
            return (
                <li key={index}>{value.title}</li>
            )
        });
        return (
            <div>
                <PlaceCard
                    place={place.title} />
            </div>
        )
    }
}

export default PlacesList; 