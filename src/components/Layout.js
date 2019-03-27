import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Home from "../pages/Home";
import About from "../pages/About";
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import Admin from "../pages/Admin";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Profil from "../pages/Profil";
import NotFound from "../pages/NotFound";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    grow: {
        flexGrow: 1,
    },
});

//function ClippedDrawer(props) {
//TODO delete render() if function
class Layout extends React.Component {

    state = {
        mobileOpen: false,
        anchorEl: null,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };


    render() {
        const {classes, theme} = this.props;

        const {anchorEl} = this.state;

        const open = Boolean(anchorEl);

        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <List>
                    <ListItem button component={Link} to="/home">
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                    <ListItem button component={Link} to="/about">
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary="About"/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem button component={Link} to="/admin">
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary="Admin"/>
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
                            RSS - FRONT
                        </Typography>
                        <div>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose} component={Link} to={"/profil"}>Profil</MenuItem>
                                <MenuItem onClick={this.handleClose} component={Link} to={"/connexion"}>Deconnexion</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Switch>
                        <Redirect path="/" exact to="/home" />
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/admin" component={Admin}/>
                        <Route path="/profil" component={Profil}/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>
            </div>
        );
    }

}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Layout);