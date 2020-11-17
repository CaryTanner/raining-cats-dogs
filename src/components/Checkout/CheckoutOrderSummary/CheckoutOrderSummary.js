import React, { useState, useEffect }from 'react'
import { Grid, Typography} from '@material-ui/core'
import styles from './CheckoutOrderSummary.module.css'

export default function CheckoutOrderSummary({cartItems}){

 const [subtotal, setSubtotal] = useState('')
 const [total, setTotal] = useState(0)

 // subtotal calc -- warning for infinite loop but doesn't update with [cartItems] as second arg to useEffect??
 let subtotalCallback = ( acc, cur) => { return acc + (cur.item.price * parseInt(cur.count))}


 useEffect(()=>{
   setSubtotal(cartItems.reduce(subtotalCallback, 0))
 })

    return(
      
        <>
        <Grid
            item
            
            xs={12}
            className={styles.summarySection}
            container
            direction="column"
            
          >
            <Typography variant="h6" align="Left">
              Order Summary
              <br />
              <hr />
            </Typography>

            <Grid item container justify="space-between" className={styles.subtotalText}>
              <Typography variant="h6" align="Left">
                Subtotal:
              </Typography>
              <Typography variant="h6" align="Left">
                {`$${subtotal}`}
              </Typography>
            </Grid>
            <Grid item container justify="space-between" >
              <Typography variant="h6" align="Left">
                Shipping:
              </Typography>
              <Typography variant="h6" align="Left">
                {`Free Shipping`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <hr />
            </Grid>
            <Grid item container justify="space-between" >
              <Typography xs={12} variant="h4" align="Left">
                Total
              </Typography>
              <Typography variant="h4" align="Left">
                {`$${total}`}
              </Typography>
            </Grid>
          </Grid>
        
        </>
    )
}