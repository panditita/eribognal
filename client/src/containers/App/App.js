import React, { Component } from 'react';
import './App.css';
import Menu from '../../components/Menu/Menu';
import About from '../../components/About/About';
import Home from '../../components/Home/Home';
import PlacesList from '../PlaceList';
import Questions from '../Questionnaire/Questionnaire';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import MenuIcon from 'material-ui-icons/Menu';
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
                <Menu />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/questionnaire" component={Questions} />
                <Route path="/places" component={PlacesList} /> 
              </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);

