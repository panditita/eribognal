import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';

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
		marginTop: -95,
		paddingLeft: 35
	}
};

const PlaceCard = (props) => {
	const place = props.place;
	return (
		<div>
			<Grid container spacing={24}>
				<Grid item xs={12}>
					<ListItem style={styles.listItem}>
						{place.address == '' || place.description == '' ? (
							<p style={styles.listTitle}> {place.name} </p>
						) : (
							<div>
								<p style={styles.listTitle}> {place.name} </p>
								<p style={styles.listAddress}>{place.address} </p>
								<p style={styles.listDetails}> {place.description} </p>
							</div>
						)}
					</ListItem>
				</Grid>
			</Grid>
		</div>
	);
};

export default withStyles(styles)(PlaceCard);
