import React from 'react';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import { NavLink } from "react-router-dom";
import { Add } from 'material-ui-icons/';

const iconStyles = {
    marginLeft: 50,
    fontSize: 12,
};

const AddPlaceButton = () => (
    <div>
        <Button style={iconStyles}>
            <IconButton tooltip="SVG Icon" >
                <Add />
            </IconButton>
            <NavLink to="/new-place">Suggest New Place</NavLink>
        </Button>
    </div>

);

export default AddPlaceButton;

