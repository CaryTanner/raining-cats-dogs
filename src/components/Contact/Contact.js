import React from 'react'
import styles from './Contact.module.css'
import ContactForm from './ContactForm/ContactForm'
import {Grid, Paper, Typography, Container, useTheme, useMediaQuery } from '@material-ui/core'
import { useHistory, useParams } from "react-router-dom"
import Faq from './Faq/Faq';
import HumaneBreeding from './HumaneBreeding/HumaneBreeding';
import PetOwnership from './PetOwnership/PetOwnership'
import ShippingReturns from './ShippingReturns/ShippingReturns';


export default function Contact(){
 
 
  //logic which section to display
  let history = useHistory();
  const { section } = useParams();
  
  //change position of article and links on mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const pageReverse = isMobile ? "column-reverse" : "row"

    return(<>
        <Container>
        <Grid container  direction={pageReverse} justify="space-evenly" >
         
         
         <Grid item xs={12} sm={4} md={3} container direction="column" className={styles.infoSection}> 
         
         <Typography variant="h5" align="left" className={styles.information}> 
         Contact
         <hr/>
          </Typography>
          
          <a href="/contact/contact" className={styles.links} >Contact Form </a>
        <a href="/contact/faq" className={styles.links}>FAQ</a>
        <a href="/contact/humane_breeding" className={styles.links}>Humane Breeding</a>
        <a href="/contact/pet_ownership" className={styles.links}>Pet Ownership</a>
        <a href="/contact/shipping_returns" className={styles.links}>Shipping &amp; Returns</a>
        
        
         </Grid> 
         
        
        <Grid item xs={12} sm={7}  className={styles.section}>
        <Paper className={styles.form}>


        {section === "contact" ? <ContactForm /> : null }
        {section === "faq" ? <Faq /> : null }
        {section === "humane_breeding" ? <HumaneBreeding /> : null }
        {section === "shipping_returns" ? <ShippingReturns /> : null }
        {section === "pet_ownership" ? <PetOwnership /> : null }

        </Paper>
        </Grid>
        
        
        </Grid>
        </Container>
    </>)
}