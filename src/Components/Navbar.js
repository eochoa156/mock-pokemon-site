import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link'; // Correct import from @mui/material

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        color="inherit"
                    >
                        <MenuSharpIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem component={RouterLink} to="/gen1" onClick={handleClose}>Gen 1</MenuItem>
                        <MenuItem component={RouterLink} to="/gen2" onClick={handleClose}>Gen 2</MenuItem>
                        <MenuItem component={RouterLink} to="/gen3" onClick={handleClose}>Gen 3</MenuItem>
                        <MenuItem component={RouterLink} to="/gen4" onClick={handleClose}>Gen 4</MenuItem>
                        <MenuItem component={RouterLink} to="/gen5" onClick={handleClose}>Gen 5</MenuItem>
                        <MenuItem component={RouterLink} to="/gen6" onClick={handleClose}>Gen 6</MenuItem>
                        <MenuItem component={RouterLink} to="/gen7" onClick={handleClose}>Gen 7</MenuItem>
                        <MenuItem component={RouterLink} to="/gen8" onClick={handleClose}>Gen 8</MenuItem>
                        <MenuItem component={RouterLink} to="/gen9" onClick={handleClose}>Gen 9</MenuItem>
                    </Menu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        LOGO
                        <Link component={RouterLink} to="/" sx={{ color: '#fff', textDecoration: 'none', marginLeft: 2 }}>
                            Home
                        </Link>
                        <Link component={RouterLink} to="/wishlist" sx={{ color: '#fff', textDecoration: 'none', marginLeft: 2 }}>
                            Wishlist
                        </Link>
                        <Link component={RouterLink} to="/about" sx={{ color: '#fff', textDecoration: 'none', marginLeft: 2 }}>
                            About
                        </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
