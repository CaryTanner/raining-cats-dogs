import React, { useState } from "react";
import {Button,  TextField, Snackbar, IconButton,  useTheme, useMediaQuery } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import styles from './AddToCart.module.css'
import { useHistory } from "react-router-dom";


export default function AddToCart({item, addToCart}){
    //item count
    const [count, setCount] = useState(1)
    // open snackbar
    const [open, setOpen] = useState(false);

//logic snackbar
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const snackbarPosition = isMobile ? "top" : "bottom"

    const handleClick = () => {
        setOpen(true);
        addToCart(item, count)
      };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        setOpen(false)
    }
    
    // router logic
  let history = useHistory();

  function handleClickLink(path) {
    history.push(path);
  }
    return(<>
    
    <Snackbar
        anchorOrigin={{
          vertical: snackbarPosition,
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`Success! ${item ? item.name : null} added to cart.`}
        
        action={
          <>
            <Button color="secondary" size="small" onClick={()=> handleClickLink("/checkout")}>
              Checkout
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
        />
          

        
    
    <TextField
          label="Amount"
          defaultValue={1}
          type="number"
          onChange={(event) => setCount(event.target.value)}
          size="small"
          variant="outlined"
          className={styles.textField}
          inputProps={{ min: 1, max: 10 }}
        />
        <Button  className={styles.addToCartButton} onClick={() => handleClick()} color="secondary" variant="contained">
        Add to Cart&nbsp; <AddShoppingCartIcon />
        </Button>
        </>
    )

}
