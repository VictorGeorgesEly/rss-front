import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import * as userData from "../data/user";

const styles = {
    card: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
};

class Profil extends React.Component {

    state = {
        users: [],
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        userData.getUsers().then(res => {
            const users = res.data;
            this.setState({users});
        });
    }

    render(): React.ReactNode {
        const { classes } = this.props;
        return (
            <div>
                <h1>Profil</h1>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            be
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Learn More</Button>
                        <Button>Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }

}Profil.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profil);
