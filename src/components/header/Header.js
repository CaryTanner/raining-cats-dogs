import React, { useEffect} from "react";
import {
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  MenuItem,
  Menu,
  useMediaQuery,
  Badge,
  Button,
  Grid
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from '@material-ui/icons/Menu';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import { useHistory, useLocation } from "react-router-dom";
import CartItems from "../CartItems/CartItems";


import styles from "./Header.module.css";

const Header = ({ products, removeFromCart }) => {
  //logic open hamburger menu & hide it on desktop
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const cloudLogoSize = (isMobile ? "medium" : "large");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //logic cart

  const [anchorElCart, setAnchorElCart] = React.useState(null);
  const openCart = Boolean(anchorElCart);

  const handleMenuCart = (event) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCloseCart = () => {
    setAnchorElCart(null);
  };

  const disabledCheckoutBtn = products.length > 0 ? false : true

  // router logic
  let history = useHistory();
  
  function handleClickLink(path) {
    handleClose()
    history.push(path);  
  }

  // logic to highlight current section of site && 

  // let location = useLocation()
  
  // let dogsRegex = /^\/breeds\/dogs/g.test(location.pathname) ? "secondary" : "inherit"
  // let catsRegex = /^\/breeds\/cats/g.test(location.pathname) ? "secondary" : "inherit"
  // let contactRegex = /^\/contact/g.test(location.pathname) ? "secondary" : "inherit"
  // let homeRegex = /^\/$/g.test(location.pathname) ? "secondary" : "inherit"
  
  // console.log( 'path name  ' + location.pathname)



  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar >
          <div className={styles.title}>
            <Typography onClick={() => handleClickLink("/")} variant="h4" className={styles.logo}>
              <FilterDramaIcon  color="secondary" fontSize={cloudLogoSize} />&nbsp;Raining&nbsp;Cats&nbsp;&amp;&nbsp;Dogs
            </Typography>
            {isMobile ? null : (
              <>
              <Typography >
                <Link
                  href="/"
                  color="inherit"
                  
                  className={styles.navLinks}
                  variant="h6"
                >
                  Home
                </Link>
                <Link
                  href="/breeds/dogs"
                  color="inherit"
                  
                  className={styles.navLinks}
                  variant="h6"
                 
                >
                  Dogs
                </Link>
                <Link
                  href="/breeds/cats"
                  color="inherit"
                  
                  className={styles.navLinks}
                  variant="h6"
                >
                  Cats
                </Link>
                <Link
                  href="/contact/contact"
                  color="inherit"
                  
                  className={styles.navLinks}
                  variant="h6"
                >
                  Contact
                </Link>
              </Typography>
              <Typography variant="h6" className={styles.checkoutLink} style={{color: '#ffb354', visibility: 'hidden' }} >
                  Checkout
              </Typography>
              </>
            )}
          </div>

          <IconButton
            onClick={handleMenuCart}
            edge="end"
            className={styles.shoppingCart}
            color="inherit"
          >
            <Badge color="secondary" badgeContent={products.length} showZero>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElCart}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={openCart}
            onClose={handleCloseCart}
            
          >
            <MenuItem >
              {products.length > 0 ? <CartItems products={products} removeFromCart={removeFromCart} /> : <Typography variant="body1" justify="center" >Cart is empty</Typography> }
            </MenuItem>
            <MenuItem >
            <Grid container justify="space-evenly" className={styles.cartMenu}>
              <Grid item>
              <Button disabled={disabledCheckoutBtn} onClick={() => handleClickLink("/checkout")} variant="contained" className={styles.checkoutButton}>Checkout</Button> 
              </Grid>
              <Grid item>
              <Button onClick={handleCloseCart}variant="outlined" color="secondary">Close</Button>
              </Grid>
              </Grid>
            </MenuItem>
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
                <MenuItem onClick={() => handleClickLink("/")}>Home</MenuItem>
                <MenuItem onClick={() => handleClickLink("/breeds/dogs")}>
                  Dogs
                </MenuItem>
                <MenuItem onClick={() => handleClickLink("/breeds/cats")}>
                  Cats
                </MenuItem>
                <MenuItem onClick={() => handleClickLink("/contact/contact")}>
                  Contact
                </MenuItem>
              </Menu>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
