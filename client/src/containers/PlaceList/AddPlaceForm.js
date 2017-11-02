import React from 'react';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
  },
};

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
        <Grid item xs={6}>
          <Paper style={styles} zDepth={3} >
            <h2 className="card-heading">Suggest a New Place</h2>
            <form>
              <TextField
                floatingLabelText='Name of the Place'
                value={this.state.name}
                onChange={this._handleChange}
                type="text"
                name="name" 
                hintText='Name of the Place'/>
              <br />
              <TextField
                floatingLabelText="Description of the Place"
                value={this.state.description}
                onChange={this._handleChange}
                type="text"
                name="description" 
                hintText="Description of the Place"/>
              <br />
              <RaisedButton type="submit" value="Submit" onClick={this._handleSubmit}>
                Save
        </RaisedButton>
            </form>
          </Paper>
        </Grid>
    )
  }
}

export default withStyles(styles)(AddPlaceForm);