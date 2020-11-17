import React from 'react'
import {Grid, Button} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function PaymentForm({setActiveStep}){

    return(
    <>
        <h2>Pay the money $$$$$$</h2>
        <Grid container xs={12} justify="space-around">
        <Button variant="contained" color="primary" onClick={()=> setActiveStep({type: 'decrement'})}> <ArrowBackIosIcon fontSize="small"/> Shipping</Button>
        <Button variant="contained" color="primary" > Order <ArrowForwardIosIcon fontSize="small" /></Button>
        </Grid>
    </>

    )
}