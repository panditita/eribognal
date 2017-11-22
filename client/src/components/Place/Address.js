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

class City extends React.Component {
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
                    margin="normal"
                    onChange={(event) => this.props.onChange(event, "city")}
                >
                    <MenuItem value="0"> Glasgow</MenuItem>
                </TextField>
            </FormControl >
        )
    }
}

class Address extends React.Component {
    constructor(props) {
        super(props);
        this._trackAddress = this._trackAddress.bind(this);
        this._trackAddress = this._trackAddress.bind(this);
        this.address = this.props.address;
        this.city = this.props.city;
    }

    _trackAddress() {

        this.props.addAddress(this.address)
        this.props.addAddress(this.city)

    }

    render() {
        return (
            <div style={styles.addressContainer}>
                <TextField
                    value={this.address.line1}
                    type="text"
                    name="address"
                    hintText='Line 1'
                    placeholder="Address line 1"
                    floatingLabelText='Address of the Place'
                    onChange={(event) => this.props.onChange(event, "line1")}
                />
                <TextField
                    value={this.address.line2}
                    type="text"
                    name="address"
                    hintText='line 2'
                    placeholder="Address line 2"
                    floatingLabelText='Address of the Place'
                    onChange={(event) => this.props.onChange(event, "line2")}

                />
                <TextField
                    value={this.address.postcode}
                    type="text"
                    name="address"
                    hintText='postcode'
                    placeholder="Postcode"
                    floatingLabelText='Address of the Place'
                    onChange={(event) => this.props.onChange(event, "postcode")}

                />
            </div>
        )
    }
}

export { Address, City };

