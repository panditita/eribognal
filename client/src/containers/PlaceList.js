import React, { Component } from 'react';
import axios from 'axios';
import PlaceCard from '../components/Place/PlaceCard';

class FetchPlacesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: []
        };
    }

    componentDidMount() {
        axios.get(`http://www.reddit.com/r/reactjs.json`)
            .then(res => {
                const places = res.data.data.children.map(obj => obj.data);
                this.setState({ places });
            });
    }

    render() {
        return React.createElement(PlaceCard, {places: this.props.places});
    }
}





/* import axios from 'axios';
//import PlaceCard from '../components/Place/PlaceCard';

import React, { Component } from 'react'

const URL = 'http://codepen.io/jobs.json';

class FetchPlacesList extends Component {
    constructor (props) {
        super (props);
        this.state = {
            places: []
        };
    }

    componentDidMount () {
        const _this = this;
        axios.get(URL)
        .then((res) => {
            _this.setState({
                placesList: [res.data.places]
            });
        })
        .catch((e) => {
            console.log("Error", e);
        })
    }

    componetWillUnmount (){
        this.serverRequest.abort();
    }

    render(){
        const renderList = this.state.placesList.map((item, i) => {
            return 
                <li key={i}>{item.title}</li>
        });
               return
               <ul className="App">
                   {renderList}
                   </ul>

               /*  <div>
                <PlaceCard />

                </div> 
        
        
        } 
       
       

}
*/

export default FetchPlacesList; 