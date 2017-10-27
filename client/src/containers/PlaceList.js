import React, { Component } from 'react';
import axios from 'axios';
import PlaceCard from '../components/Place/PlaceCard';

class FetchPlacesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: "",
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://eribognal-server.herokuapp.com/api/questions')
            .then(({data}) => {
                this.setState({
                    places: data.places,
                    data: data.data.children
                });
            })
            .catch((err) => {})
        }

    render() {
        return (
            <div>
                {this.state.data.map( place => {
                    return (
                        <PlaceCard />
                    )
                })}
            </div>
        )
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