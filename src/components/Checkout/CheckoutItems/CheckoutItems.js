import React from "react";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Link,
  TextField,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./CheckoutItems.module.css";
import { useHistory } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CheckoutItems = ({ cartItems, removeFromCart, increaseItemCount, setActiveStep }) => {
  // router logic
  let history = useHistory();

  function handleClickLink(path) {
    history.push(path);
    
  }

  function handleStep(direction){
    setActiveStep(direction)
    window.scrollTo(0, 0);
  }

  return (
  <>
      {cartItems.length > 0 ? (
       <>   
        <List className={styles.list}>
          {cartItems.map((product) => {
            return (
              <ListItem key={product.item.id}>
                <ListItemAvatar>
                  <Avatar alt="" src={product.item.pic} variant="h3" />
                </ListItemAvatar>

                <ListItemText
                  className={styles.animalName}
                  id={product.item.id}
                  primary={
                    <Link
                      color="inherit"
                      onClick={() => handleClickLink(product.item.link)}
                      variant="h4"
                    >
                      {product.item.name}
                    </Link>
                  }
                  secondary={
                    <TextField
                      defaultValue={product.count}
                      type="number"
                      //   onChange={(event) => setCount(event.target.value)}
                      size="small"
                      variant="outlined"
                      className={styles.textField}
                      inputProps={{ min: 1, max: 10 }}
                      onChange={(event) =>
                        increaseItemCount(event.target.value, product.uniqueId)
                      }
                    />
                  }
                />

                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => removeFromCart(product.uniqueId)}
                    edge="end"
                    aria-label="delete"
                    className={styles.deleteIcon}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <ListItemText
                    className={styles.itemPrice}
                    primary={<h2>${product.item.price}</h2>}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <Grid container xs={12} justify="space-around">
        
            <Button variant="contained" color="secondary" onClick={()=> handleStep({type: 'increment'})}>Shipping<ArrowForwardIosIcon fontSize="small"/> </Button>
        </Grid>
        </>
      ) : (
        <Grid container alignContent="center" className={styles.emptyCart}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" className={styles.emptyCartTitle}>
              Cart is Empty
            </Typography>
          </Grid>
          <Grid item container justify="center">
            <Button
              href="/breeds/cats"
              variant="contained"
              color="secondary"
              className={styles.emptyCartButton}
              size="large"
            >
              Find Cats
            </Button>
            <Button
              href="/breeds/dogs"
              variant="contained"
              color="secondary"
              className={styles.emptyCartButton}
              size="large"
            >
              Find Dogs
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CheckoutItems;
