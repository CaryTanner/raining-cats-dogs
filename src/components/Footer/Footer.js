import React,  { useState } from "react";
import styles from "./Footer.module.css";
import { Grid, Button, TextField, Snackbar } from "@material-ui/core";

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {


  // snackbar logic for newsletter
 const [open, setOpen] = useState(false)
 const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false)
}
 

  return (
    <>
      <Grid container direction="row" className={styles.footer}>
        <Grid xs={12}  sm={6} md={3} item container direction="column">
          <h2 className={styles.title}>Our Main Office</h2>
          <p className={styles.text}>400 McCilenn Street </p>
          <p className={styles.text}>Oakland, CA 94158</p>
          <p className={styles.text}>Tel: 123-456-789</p>
        </Grid>
        <Grid xs={12}  sm={6} md={3} item container direction="column">
        <h2 className={styles.title}>Shop</h2>
        <a  href="/breeds/dogs" className={styles.links}> Dogs </a>
        <a  href="/breeds/cats" className={styles.links}> Cats </a>
        
        
        </Grid>
        <Grid xs={12} sm={6} md={3} item container direction="column">
        <h2 className={styles.title}>Info</h2>
        <a href="/contact/contact" className={styles.links} >Contact </a>
        <a href="/contact/faq" className={styles.links}>FAQ</a>
        <a href="/contact/humane_breeding" className={styles.links}>Humane Breeding</a>
        <a href="/contact/pet_ownership" className={styles.links}>Pet Ownership</a>
        <a href="/contact/shipping_returns" className={styles.links}>Shipping &amp; Returns</a>
        
        

        </Grid>
        <Grid xs={12}  sm={6} md={3} item container direction="column">
        <h2 className={styles.title}>Get Special Deals and Offers</h2>
          
        <TextField size="small" className={styles.input} id="footer-email" label="Email" variant="filled" color="secondary" />
          <Button onClick={()=>{setOpen(true)}}type="submit" color="secondary" variant="contained">
            subscribe
          </Button>
           
          <Grid item >
          <h2 className={styles.title}>Cute Kitties &amp; Doggos!  </h2>
          <Grid item container direction="row">
            <FacebookIcon className={styles.social} fontSize="large" />
            <InstagramIcon className={styles.social} fontSize="large" />
            <YouTubeIcon className={styles.social} fontSize="large" />

          </Grid>
          </Grid>
          
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        
        message={`Thanks, for signing up!`}
        action={
          <>
            <Button variant="contained" color="secondary" size="small" onClick={()=> handleClose()}>
              Close
            </Button>
            
          </>
        }
        />
    </>
  );
}
