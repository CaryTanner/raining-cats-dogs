import React from "react";
import styles from "./Footer.module.css";
import { Grid, Button, Typography, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {

    // router logic
  let history = useHistory();

  function handleClickLink(path) {
    history.push(path);
  }

  return (
    <>
      <Grid container direction="row" className={styles.footer}>
        <Grid xs={12} md={3} item container direction="column">
          <h2 className={styles.title}>Our Main Office</h2>
          <p className={styles.text}>400 McCilenn Street </p>
          <p className={styles.text}>Oakland, CA 94158</p>
          <p className={styles.text}>Tel: 123-456-789</p>
        </Grid>
        <Grid xs={12} md={3} item container direction="column">
        <h2 className={styles.title}>Shop</h2>
        <a  href="/dogs" className={styles.links}> Dogs </a>
        <a  href="/cats" className={styles.links}> Cats </a>
        
        
        </Grid>
        <Grid xs={12} md={3} item container direction="column">
        <h2 className={styles.title}>Info</h2>
        <a href="/contact" className={styles.links} >Contact </a>
        <a href="" className={styles.links}>Pet Ownership</a>
        <a href="" className={styles.links}>Shipping &amp; Returns</a>
        <a href="" className={styles.links}>Policy</a>
        <a href="" className={styles.links}>FAQ</a>

        </Grid>
        <Grid xs={12} md={3} item container direction="column">
        <h2 className={styles.title}>Get Special Deals and Offers</h2>
            
        <TextField size="small" className={styles.input} id="footer-email" label="Email" variant="filled" color="secondary" />
          <Button color="secondary" variant="contained">
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
    </>
  );
}
