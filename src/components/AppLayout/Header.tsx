import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon';
import { faMoon as faSolidMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { useAppState } from '../../context';

export default function Header() {
    const { toggleTheme, isDarkMode } = useAppState("app");

    return (
        <Typography component={"div"} sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800 }}>
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
        </Typography>
    );
}


