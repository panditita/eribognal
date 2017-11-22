import React from 'react';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form';

const styles = ({
    addressContainer: {
        display: 'flex',
        flexDirection: "column",
    }
});

export class City extends React.Component {
    render() {
        const classes = this.props;
        const city = "Glasgow";

        return (
            <FormControl className={classes.formControl}>
                <TextField
                    name="city"
                    id="city"
                    select
                    className={classes.textField}
                    value={this.props.city}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                        value: city,
                    }}
                    helperText="Please select your city"
                    margin="normal">
                    <MenuItem value="0"> Glasgow</MenuItem>
                </TextField>
            </FormControl >
        )
    }
}

export class Address extends React.Component {
    constructor(props) {
        super(props);
        this.trackAddress = this.trackAddress.bind(this);
        this.trackAddress = this.trackAddress.bind(this);
        this.address = this.props.address;
        this.city = this.props.city;
    }

    trackAddress() {
        this.props.addAddress(this.address)
        this.props.addAddress(this.city)
    }

    render() {
        return (
            <div className="addressContainer" style={styles.addressContainer}>
                {this.props.address}
                <TextField
                    value={this.address.line1}
                    type="text"
                    name="line1"
                    hintText='Line 1'
                    placeholder="Address line 1"
                    floatingLabelText='Address of the Place'
                />
                <TextField
                    value={this.address.line2}
                    type="text"
                    name="line2"
                    hintText='line 2'
                    placeholder="Address line 2"
                    floatingLabelText='Address of the Place'
                />
                <TextField
                    value={this.address.postcode}
                    type="text"
                    name="postcode"
                    hintText='postcode'
                    placeholder="Postcode"
                    floatingLabelText='Address of the Place'
                />

            </div>)
    }
}


