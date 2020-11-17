import React from 'react'
import styles from './Contact.module.css'
import ContactForm from './ContactForm/ContactForm'
import {Grid, Paper, Typography, Container, useTheme, useMediaQuery } from '@material-ui/core'

export default function Contact(){
 
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const pageReverse = isMobile ? "column-reverse" : "row"

    return(<>
        <Container>
        <Grid container  direction={pageReverse} justify="space-evenly" >
         
         
         <Grid item xs={12} sm={4} md={3} container direction="column" className={styles.infoSection}> 
         
         <Typography variant="h5" align="left" className={styles.information}> 
         Information
         <hr/>
          </Typography>
          
          <a href="" className={styles.links}>FAQ</a>
          <a href="" className={styles.links}>Humane Breeding</a>
          <a href="" className={styles.links}>Pet Ownership</a>
        <a href="" className={styles.links}>Shipping &amp; Returns</a>
        
        
         </Grid> 
         
        
        <Grid item xs={12} sm={7} md={6} className={styles.section}>
        <Paper className={styles.form}>
            
        <ContactForm />
        </Paper>
        </Grid>
        
        
        </Grid>
        </Container>
    </>)
}