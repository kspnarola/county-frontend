import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppState } from '../../context';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            background: theme.palette.primary.main
        },
        paper: {
            marginRight: theme.spacing(2),
            background: theme.palette.primary.main
        },
        proper: {
            background: theme.palette.primary.main
        }
    })
);

const menuItemsList = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania'
]

export default function FilterByRegion() {
    const { getAllCountriesByRegion } = useAppState('country');
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedRegion, setSelectedRegion] = React.useState("");
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelectRegion = (region: string) => {
        getAllCountriesByRegion(region);
        setSelectedRegion(region);
        handleClose();
    }

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>

            <div style={{ position: "relative", width: "100%" }}>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    endIcon={<FontAwesomeIcon icon={faAngleDown} />}
                    style={{ padding: "10px 15px", width: "100%" }}
                    className="btn-filter"
                >
                    Filter by Region
                </Button>
                <Popper className={classes.proper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ zIndex: "9", top: "5px", left: 0, right: 0 }}>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'bottom' : 'bottom' }}
                        >
                            <Paper className={classes.proper}>
                                <ClickAwayListener onClickAway={() => handleClose()}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        {menuItemsList.map((item, index) =>
                                            <MenuItem key={index} onClick={() => handleSelectRegion(item)} selected={item === selectedRegion}>{item}</MenuItem>
                                        )}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}
