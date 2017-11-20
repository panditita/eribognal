import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = {
	listTitle: {
		fontSize: 20,
		color: 'rgba(0,0,0,0.87)',
		letterSpacing: 0
	},

	listAddress: {
		fontSize: 14,
		color: 'rgba(0,0,0,0.54)'
	},

	listDetails: {
		fontSize: 14,
		color: 'rgba(0,0,0,0.54)'
	},
	listItem: {
		display: 'flex',
		flexDirection: 'column',
		padding: 0,
		paddingLeft: 10
	}
};

const PlaceCard = (props) => {
	const place = props.place;
	const getAddress = (place) => {
		if (place.address) {
			return
			<div>
				<p style={styles.listAddress}>{place.address} </p>
			</div>
		} else {
			return null
		}
	}
	return (
		<div style={styles.listItem}>
			<div>
				<p style={styles.listTitle}> {place.name} </p>
				{getAddress(place)}
				<p style={styles.listDetails}> {place.description} </p>
			</div>
		</div>
	)
};

export default withStyles(styles)(PlaceCard);
