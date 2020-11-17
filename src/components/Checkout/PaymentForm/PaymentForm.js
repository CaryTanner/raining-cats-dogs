import React, { useState } from "react";
import {
  Grid,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Snackbar,

} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import styles from "./PaymentForm.module.css";

export default function PaymentForm({ setActiveStep, email, firstName }) {

    
  //open dialog for online payment & snackbar 'thanks'
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false)
  }
  
  const handleOpenSnackbar = () => {
    setOpen(false)
    setOpenSnackbar(true) 
    }

    

  return (
    <>
    

      <Grid container xs={12} justify="center" alignItems="center" className={styles.form}>
        <FormControl component="fieldset" >
          <FormLabel component="legend">Payment Options</FormLabel>
          <RadioGroup aria-label="payment" name="payment" defaultValue="top" required>
            <FormControlLabel
              value="invoice"
              control={<Radio color="primary" />}
              label="Invoice"
              labelPlacement="end"
            />
            <FormControlLabel
              value="credit card"
              control={<Radio color="primary" />}
              label="Bank Card"
              labelPlacement="end"
            />
            <FormControlLabel
              value="pay pal"
              control={<Radio color="primary" />}
              label="Pay Pal"
              labelPlacement="end"
            />
          </RadioGroup>
         
        </FormControl>
      </Grid>
      <Grid container xs={12} justify="space-around">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setActiveStep({ type: "decrement" })}
        >
         
          <ArrowBackIosIcon fontSize="small" /> Shipping
        </Button>
        <Button type="submit" variant="contained" color="primary" onClick={handleClickOpen}>
          
          Order <ArrowForwardIosIcon fontSize="small" />
        </Button>
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Unable to accept online payments at this time</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please confirm your email and we will contact you to complete your order.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            defaultValue={email ? email : null}
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
            cancel
          </Button>
          <Button onClick={handleOpenSnackbar} color="primary">
            confirm
          </Button>
          
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        
        message={`Thanks, ${firstName}. We'll contact you ASAP!`}
        
        />
      
    </>
  );
}
