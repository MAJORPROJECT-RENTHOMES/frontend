import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import DataContext from '../context/Data/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';


function Navbar() {
    
    const [user, setUser] = useState(false);
        const { getData } = useContext(DataContext);
  
        const pages = ['', 'About'];
            const navigate = useNavigate();
        
        
        useEffect(() => {
            getData();
        }, [])
        
            // const logout = () => {
            //         localStorage.removeItem('u-token');
            //         navigate('/login');
            // }
        const [anchorElNav, setAnchorElNav] = React.useState(null);
        const [anchorElUser, setAnchorElUser] = React.useState(null);
        
        const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleLogout = () => {
      localStorage.removeItem('u-token');
      setUser(false);
      navigate('/login');
      setAnchorElUser(null);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            HOMEZY
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" component={Link}
                    to={`/${page.toLowerCase()}`} sx={{textDecoration: 'none', color: 'inherit'}}>{page === '' ? 'Home' : page === 'Add' ? 'Add House' : page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
            HOMEZY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} // Use Link from react-router-dom
                to={`/${page.toLowerCase()}`}
              >
                {page === '' ? 'Home' : page}
              </Button>
            ))}
            {localStorage.getItem('u-token') &&
            <Link className="btn-add" to='/AddHouse' role="button">ADD HOUSE</Link>}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          {!localStorage.getItem('u-token')
                            ?
                            <form className="d-flex">
                                <Link className="btn-navbar" to='/login' role="button">Login</Link>
                                <Link className="btn-navbar" to='/signup' role="button">Signup</Link>
                            </form>
                            :
                            <>
                                <div className="d-flex" style={{ alignItems: "center" }}>
                                    <Link className="btn-navbar" to='/profile' role="button">Profile</Link>
                                    <Link className="far fa-user" to='/reports'></Link> 
                                    {/* <Link className="btn btn-dark nav-btn"  role="button">Past Reports</Link> */}
                                    <Link className="btn-navbar" to='/login' onClick={handleLogout} role="button">Logout</Link>
                                </div>
                            </>
                        }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;