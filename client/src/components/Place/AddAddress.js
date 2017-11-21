import React from 'react';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

const AddAddress = props => {
    const { address, AddAddress } = props;
    return (<div>
        <TextField
            value={address}
            type="text"
            name="address"
            hintText='Address of the Place'
            placeholder="Address of the Place"
            floatingLabelText='Address of the Place'
        />
    </div>)
}


export default AddAddress;

