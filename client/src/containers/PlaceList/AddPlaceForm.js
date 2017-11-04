import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import apiClient from '../../helpers/apiClient';

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
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

  _handleSubmit = (event) => {
    event.preventDefault();
    apiClient.suggestPlaces({
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
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Paper style={styles} zDepth={3} >
              <h2 className="card-heading">Suggest a New Place</h2>
              <form  style={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>
                <TextField
                  placeholder="Name of the Place"
                  floatingLabelText='Name of the Place'
                  value={this.state.name}
                  onChange={this._handleChange}
                  type="text"
                  name="name"
                  hintText='Name of the Place' />
                <TextField
                  placeholder="Description"
                  floatingLabelText="Description"
                  value={this.state.description}
                  onChange={this._handleChange}
                  type="text"
                  name="description"
                  hintText="Description" 
                  multiLine={true}/>
                <RaisedButton type="submit" value="Submit" onClick={this._handleSubmit}>
                  Save
        </RaisedButton>
              </form>
            </Paper>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(AddPlaceForm);