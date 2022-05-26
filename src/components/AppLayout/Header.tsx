import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NightsStayOutlined from '@material-ui/icons/NightsStay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon';
import { faMoon as faSolidMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { useAppState } from '../../context';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 800
    },
}));

interface IHeaderPpropTypes {

}

export default function Header(props: IHeaderPpropTypes) {
    const { toggleTheme, isDarkMode } = useAppState("app");
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Where in the world?
                    </Typography>
                    <Button
                        color="inherit"
                        style={{ display: "flex", alignItems: "center" }}
                        onClick={() => toggleTheme()}
                        startIcon={<FontAwesomeIcon icon={isDarkMode ? faSolidMoon : faMoon} fontSize={"20px"} />}
                    >
                        Dark Mode
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}


