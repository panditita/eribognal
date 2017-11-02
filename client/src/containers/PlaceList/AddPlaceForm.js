import React from 'react';
import axios from 'axios';
import { Card } from 'material-ui/Card';
import { RaisedButton } from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class AddPlaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      name: '',
      description: ''
    }
  }
  _getPlaces = () => {
    axios.get('http://localhost:3000/api/places')
      .then((res => {
        const places = res.data;
        this.setState({
          places: places
        });
      }))
  }
  componentDidMount() {
    this._getPlaces();
  }
  _handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/places', {
      name: this.state.name,
      description: this.state.description
    })
      .then(() => {
        this.setState({
          name: '',
          description: ''
        })
      })
      .then(this._getPlaces)
  }
  _handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      name: value.name,
      description: value.description
    })
  }
  render() {
    return (
      <div>
        <h2 className="card-heading">Suggest a New Place</h2>
        <Card>
          <form>
            <TextField
              floatingLabelText="name"
              value={this.state.name}
              onChange={this._handleChange}
              type="text"
              name="name" />
            <TextField
              floatingLabelText="description"
              value={this.state.description}
              onChange={this._handleChange}
              type="text"
              name="description" />
            <RaisedButton type="submit" value="Submit" onClick={this._handleSubmit}>
              Save
        </RaisedButton>
          </form>
        </Card>
      </div>
    )
  }
}

export default AddPlaceForm;