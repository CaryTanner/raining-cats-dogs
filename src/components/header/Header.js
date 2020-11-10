import React from "react";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link"
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useMediaQuery } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withRouter, useHistory } from 'react-router-dom'
import FilterDramaIcon from '@material-ui/icons/FilterDrama';

import styles from './Header.module.css';



const Header = () => {
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let history = useHistory();
  
  function handleClickLink(path) {
    history.push(path);
  }
  

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
            <div className={styles.title}>
          <Typography variant="h3" className={styles.logo}>
          <FilterDramaIcon color='secondary' fontSize='large'/>
             Raining C&amp;D
          </Typography>
          {isMobile ? null : (
            <Typography  >
              <Link href="/" color="inherit" onClick={() => handleClickLink('/')} className={styles.navLinks} variant='h6'>
                Home
              </Link>
              <Link href="/dogs"  color="inherit" onClick={() => handleClickLink('/dogs')} className={styles.navLinks} variant="h6">
                Dogs
              </Link>
              <Link href="/cats"  color="inherit" onClick={() => handleClickLink('/cats')} className={styles.navLinks} variant="h6">
                Cats
              </Link>
            </Typography>
          )}
          </div>

          <IconButton
            onClick={handleMenu}
            edge="end"
            className={styles.shoppingCart}
            color="inherit"
          >
            <Badge color="secondary" badgeContent={0} showZero>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Cart stuff</MenuItem>
            <MenuItem onClick={handleClose}>Bought things</MenuItem>
          </Menu>

          

          {isMobile ? (
            <div>
              <IconButton
                onClick={handleMenu}
                edge="end"
                className={styles.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleClickLink('/')}>Home</MenuItem>
                <MenuItem onClick={() => handleClickLink('/dogs')}>Dogs</MenuItem>
                <MenuItem onClick={() => handleClickLink('/cats')}>Cats</MenuItem>
              </Menu>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header