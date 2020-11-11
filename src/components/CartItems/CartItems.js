import React from 'react';
import { List, ListItem, ListItemSecondaryAction, ListItemText, ListItemAvatar, Avatar, IconButton, Link  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './CartItems.module.css'
import { useHistory } from "react-router-dom";


const CartItems = ({products, removeFromCart}) => {

    // router logic
let history = useHistory();

function handleClickLink(path) {
  history.push(path);
}
    return( <>
    <List  >
      {products.map((product) => {
        
        return (
          <ListItem key={product.item.id} button >
            <ListItemAvatar>
              <Avatar
                alt=""
                src={product.item.pic}
              />
            </ListItemAvatar>
            <ListItemText className={styles.animalName} id={product.item.id} primary={<Link color="inherit" onClick={()=> handleClickLink(product.item.link)}>{product.item.name}</Link>} secondary={`Amount: ${product.count}`}/>
            <ListItemSecondaryAction>
                    <IconButton onClick={()=> removeFromCart(product.itemId)} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
     </>)
}

export default CartItems