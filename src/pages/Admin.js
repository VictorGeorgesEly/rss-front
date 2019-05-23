import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as userData from "../data/user";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 400,
    },
});

class Admin extends React.Component {

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
        }).catch(err => {
            console.log(err);
        });
    }

    render(): React.ReactNode {
        const {classes} = this.props;
        return (
            <div>
                <h1>Admin</h1>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Utilisateurs</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.users.map(e => {
                                return (
                                    <TableRow hover key={e.id}>
                                        <TableCell component="th" scope="row">
                                            {e.username}
                                        </TableCell>
                                        <TableCell align="right">{"tes"}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin);