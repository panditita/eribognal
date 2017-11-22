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
import Input, { InputLabel } from 'material-ui/Input';


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
  addressContainer: {
    display: 'flex',
    flexDirection: "column",
  }

});


class AddPlaceForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      places: [],
      name: '',
      address: [{
        line1: "",
        line2: "",
        postcode: "",
        city: "",
      }],
      description: '',
      selectedCategory: "-1",
    }
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    apiClient.suggestPlaces({
      name: this.state.name,
      address: [{
        line1: this.state.address.line1,
        line2: this.state.address.line2,
        postcode: this.state.address.postcode,
      },
      { city: this.state.address.city }
      ],
      description: this.state.description,
      category: this.state.selectedCategory
    })

      .then(() => {
        this.setState({
          name: "",
          address: [
            {
              line1: "",
              line2: "",
              postcode: "",
              city: ""
            }
          ],
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
    console.log(value);

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
                  helperText='Name of the Place'
                />
                <div className="addressContainer" style={styles.addressContainer}>
                  <TextField
                    value={this.state.address.line1}
                    onChange={(event) => this._handleChange(event, "line2")}
                    type="text"
                    name="line1"
                    helperText="Address line 1"
                  />
                  <TextField
                    value={this.state.address.line2}
                    onChange={(event) => this._handleChange(event, "line2")}
                    type="text"
                    name="line2"
                    helperText="Address line 2"
                  />
                  <TextField
                    value={this.state.address.postcode}
                    onChange={(event) => this._handleChange(event, "postcode")}
                    type="text"
                    name="postcode"
                    helperText="Postcode"
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <TextField
                      name="city"
                      id="city"
                      select
                      className={classes.textField}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      helperText="Select your city"
                      margin="normal"
                      value={this.state.city}
                      onChange={(event) => this._handleChange(event, "city")}>
                      <MenuItem value="0"> Glasgow</MenuItem>
                    </TextField>

                  </FormControl >
                </div>

                <TextField
                  value={this.state.description}
                  onChange={(event) => this._handleChange(event, "description")}
                  type="text"
                  name="description"
                  helperText="Description"
                  multiline rowsMax="4"
                />

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