import React from 'react';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';

const styles =  ({
    listPlaces: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "baseline",
        paddingLeft: 10,
        margin: 0,        
    },

    listTitle: {
        fontFamily: "Roboto-Medium",
        fontSize: 20,
        color: "rgba(0,0,0,0.87)",
        letterSpacing: 0,
        lineHeight: 2.8,
    },

    listAddress: {
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        color: "rgba(0,0,0,0.54)",
        lineHeight: 2.1,
    },

    listDetails: {
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        color: "rgba(0,0,0,0.54)",
        lineHeight: 2.1,
    },

    listSeparator: {
        color: "#E0E0E0",
    },

    listIcon: {
        width: 40,
        height: 40,
    }
});


const PlaceCard = props => {
    const place = props.place;
    return (

        <div>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <List>

                        <ListItem style={styles.listItem}>
                            <Avatar style={{alignSelf: "baseline"}}>
                                <img src="../icon-growing-project.jpg" style={styles.listIcon} />
                            </Avatar>
                            <div style={styles.listPlaces}>
                                <p style={styles.listTitle}> {place.name} </p>
                                <p style={styles.listAddress}>{place.address} </p>
                                <p style={styles.listDetails}> {place.description} </p>
                            </div>
                        </ListItem>
                        <ListItem >
                        </ListItem>
                    </List>
                    {/*   <Avatar >
                            <img src="../icon-local-drink.jpg" style={styles.listIcon} />
                        </Avatar> */}
                </Grid>
            </Grid>
        </div>
    )
};



export default withStyles(styles)(PlaceCard);

