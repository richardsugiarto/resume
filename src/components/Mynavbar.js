import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Mynavbar.css';
import { AppBar, Container, Box, Toolbar, IconButton, Typography, Menu, Avatar, Button, Icon, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { publicURL } from '../utils/publicURL';

const pages = ['Home', 'About', 'Education', 'Resume', 'Skills', 'Publication', 'Contact'];

function Mynavbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <nav className="myNav">
        
            <AppBar position="fixed" style={{ backgroundColor: '#212529' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Avatar sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, backgroundColor: 'white' }} src={publicURL('/assets/photo.png')}>
                        </Avatar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            RICHARD
                        </Typography>
                        
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map(page => (
                                    <Link
                                        key={page}
                                        to={page}
                                        smooth={true}
                                        duration={250}
                                        spy={true}
                                        exact="true"
                                        offset={-20} // Adjust the offset if needed to account for fixed headers, etc.
                                    >
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <Avatar sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, backgroundColor: 'white' }} src={publicURL('/assets/photo.png')}>
                        </Avatar>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            RICHARD
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map(page => (
                                <Link
                                    key={page}
                                    to={page}
                                    smooth={true}
                                    duration={250}
                                    spy={true}
                                    exact="true"
                                    offset={-20} // Adjust the offset if needed to account for fixed headers, etc.
                                >
                                    <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                        {page}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </nav>
    );
}

export default Mynavbar;
