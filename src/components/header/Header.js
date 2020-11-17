import React from "react";
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
import { useHistory } from "react-router-dom";
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

  // router logic
  let history = useHistory();
  
  function handleClickLink(path) {
    handleClose()
    history.push(path);  
  }

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={styles.title}>
            <Typography onClick={() => handleClickLink("/")} variant="h4" className={styles.logo}>
              <FilterDramaIcon color="secondary" fontSize={cloudLogoSize} />&nbsp;Raining&nbsp;Cats&nbsp;&amp;&nbsp;Dogs
            </Typography>
            {isMobile ? null : (
              <Typography>
                <Link
                  href="/"
                  color="inherit"
                  onClick={() => handleClickLink("/")}
                  className={styles.navLinks}
                  variant="h6"
                >
                  Home
                </Link>
                <Link
                  href="/dogs"
                  color="inherit"
                  onClick={() => handleClickLink("/dogs")}
                  className={styles.navLinks}
                  variant="h6"
                >
                  Dogs
                </Link>
                <Link
                  href="/cats"
                  color="inherit"
                  onClick={() => handleClickLink("/cats")}
                  className={styles.navLinks}
                  variant="h6"
                >
                  Cats
                </Link>
                <Link
                  href="/contact"
                  color="inherit"
                  onClick={() => handleClickLink("/contact")}
                  className={styles.navLinks}
                  variant="h6"
                >
                  Contact
                </Link>
              </Typography>
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
              {products.length > 0 ? <CartItems products={products} removeFromCart={removeFromCart} /> : <Typography variant="body1">Cart is empty</Typography> }
            </MenuItem>
            <MenuItem >
            <Grid container justify="space-evenly">
              <Grid item>
              {products.length > 0 ? <Button onClick={() => handleClickLink("/checkout")} variant="contained" className={styles.checkoutButton}>Checkout</Button> : null}
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
                <MenuItem onClick={() => handleClickLink("/dogs")}>
                  Dogs
                </MenuItem>
                <MenuItem onClick={() => handleClickLink("/cats")}>
                  Cats
                </MenuItem>
                <MenuItem onClick={() => handleClickLink("/contact")}>
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
