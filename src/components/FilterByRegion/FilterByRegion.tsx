import React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppState } from '../../context';

const menuItemsList = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania'
]

export default function FilterByRegion() {
    const { getAllCountriesByRegion } = useAppState('country');
    const [open, setOpen] = React.useState<boolean>(false);
    const [selectedRegion, setSelectedRegion] = React.useState<string>("");
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
        <Paper component="div" sx={{ display: "flex", bgcolor: "primary.main" }}>
            <Typography component="div" sx={{ position: "relative", width: "100%" }}>
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
                <Popper sx={{ bgcolor: "primary.main", left: 0, width: "100%" }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ zIndex: "9", top: "5px", left: 0, right: 0 }}>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'bottom' : 'bottom' }}
                        >
                            <Paper sx={{ bgcolor: "primary.main" }}>
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
            </Typography>
        </Paper>
    );
}
