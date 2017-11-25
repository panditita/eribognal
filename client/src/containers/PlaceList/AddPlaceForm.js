import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import apiClient from '../../helpers/apiClient';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import PropTypes from 'prop-types';
import { Address } from "../../components/Place/Address";


const styles = ({
  root: {
    flexGrow: 1,

  },
  paper: {
    textAlign: 'center',
    height: 300,
  }, formControl: {
    minWidth: 120,
    margin: 10
  },
  formDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});


class AddPlaceForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      places: [],
      name: '',
      address: {
        line1: '',
        line2: '',
        postcode: '',
        city: '-1'
      },
      description: '',
      selectedCategory: "-1",
    }
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    apiClient.suggestPlaces({
      name: this.state.name,
      address:
        {
          line1: this.state.address.line1,
          line2: this.state.address.line2,
          postcode: this.state.address.postcode,
          city: this.state.address.city
        },
      description: this.state.description,
      category: this.state.selectedCategory
    })

      .then(() => {
        this.setState({
          name: "",
          address: {
            line1: "",
            line2: "",
            postcode: "",
            city: "",
          },
          description: "",
          selectedCategory: ""
        })
        this.props.history.push("/")
      })
  }

  _handleChange = (event, field) => {
    const value = event.target.value;
    this.setState({
      [field]: value
    })
  }

  _handleAddress = (event, field) => {
    const value = event.target.value;
    this.setState({
      address: {
        ...this.state.address,
        [field]: value
      }
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div style={styles.formDiv}>
            <Paper style={styles} zDepth={8} >
              <h2 className="card-heading">Suggest a New Place</h2>
              <form className={classes.container} autoComplete="off" style={styles.formContainer}>

                <TextField
                  value={this.state.name}
                  onChange={(event) => this._handleChange(event, "name")}
                  type="text"
                  name="name"
                  hintText='Name of the Place'
                  placeholder="Name of the Place"
                  floatingLabelText='Name of the Place' />

                <Address
                  onChange={(event, field) => this._handleAddress(event, field)}
                  city={this.state.address.city} />



                <TextField
                  value={this.state.description}
                  onChange={(event) => this._handleChange(event, "description")}
                  type="text"
                  name="description"
                  hintText="Description"
                  multiLine={true}
                  placeholder="Description"
                  floatingLabelText="Description" />

                <FormControl className={classes.formControl}>
                  <Select style={styles}
                    value={this.state.selectedCategory}
                    onChange={(event) => this._handleChange(event, "selectedCategory")}
                  >
                    <MenuItem value="-1">Select Category</MenuItem>

                    <MenuItem value="Growing Project">Growing Project</MenuItem>
                    <MenuItem value="Night Out">Night Out</MenuItem>
                    <MenuItem value="Shopping">Shopping</MenuItem>
                    <MenuItem value="Eating Out">Eating Out</MenuItem>

                  </Select>
                </FormControl>
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

AddPlaceForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddPlaceForm);

