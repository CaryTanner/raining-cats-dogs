import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "./CheckoutOrderSummary.module.css";

export default function CheckoutOrderSummary({ cartItems, formData }) {
  const [subtotal, setSubtotal] = useState("");
  const [total, setTotal] = useState(0);

  // subtotal calc -- warning for infinite loop but doesn't update with [cartItems] as second arg to useEffect??
  let subtotalCallback = (acc, cur) => {
    return acc + cur.item.price * parseInt(cur.count);
  };

  useEffect(() => {
    setSubtotal(cartItems.reduce(subtotalCallback, 0));
  });

  // shiping form values and submit -state is stored in Checkout.js

  const { firstName, lastName, email, address, city, shipping } = formData;

  //total price
  const shippingCost =
    shipping === "standard" ? 0 : shipping === "express" ? 30 : null;

  return (
    <>
      <Grid
        item
        xs={12}
        
        container
        direction="column"
        className={styles.summary}
      >
        <Typography variant="h6" align="Left">
          Order Summary
          <br />
          <hr />
        </Typography>

        <Grid
          item
          container
          justify="space-between"
          className={styles.subtotalText}
        >
          <Typography variant="h6" align="Left">
            Subtotal:
          </Typography>
          <Typography variant="h6" align="Left">
            {`$${subtotal}`}
          </Typography>
        </Grid>
        <Grid item className={styles.address}>
        <Typography variant="h6" align="Left">
            {formData.firstName ? "Delivery Info" : ""}
          </Typography>
        <Typography variant="body1" align="Left" >
            
            {`${firstName} ${lastName}`} 
            <br/> {address} 
            <br/> {city}
            <br/> {email}
          </Typography>
        </Grid>
        <Grid item container justify="space-between">
          <Typography variant="h6" align="Left">
            Shipping:
          </Typography>
  <Typography variant="h6" align="Left"> 
  {shipping === "standard" ? "Free Shipping" : shipping === "express" ? "$30" : null}
  </Typography>
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item container justify="space-between">
          <Typography xs={12} variant="h5" align="Left">
            Total
          </Typography>
          <Typography variant="h5" align="Left">
            {`$${subtotal + shippingCost}`}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
