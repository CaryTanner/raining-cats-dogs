import React, { useState, useReducer } from "react";
import styles from "./Checkout.module.css";
import CheckoutItems from "./CheckoutItems/CheckoutItems";
import CheckoutOrderSummary from "./CheckoutOrderSummary/CheckoutOrderSummary";
import ShippingForm from "./ShippingForm/ShippingForm";
import PaymentForm from "./PaymentForm/PaymentForm";

import {
  Typography,
  Grid,
  Button,
  Stepper,
  StepLabel,
  Step,
  useTheme,
  useMediaQuery,
  Paper,
  Backdrop,
  CircularProgress
} from "@material-ui/core";

export default function Checkout({
  cartItems,
  removeFromCart,
  increaseItemCount,
}) {
  //flip stepper on mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const stepperOrientation = isMobile ? "vertical" : "horizontal";

  //stepper logic

  function stepReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, activeStep: state.activeStep + 1 };
      case "decrement":
        return { ...state, activeStep: state.activeStep - 1 };
      default:
        return state;
    }
  };
  const [step, setActiveStep] = useReducer(stepReducer, { activeStep: 0 });

  //shipping form data
  
  const [formData, setFormData] = useState({firstName: "", lastName:"", email: "", address: "", city:"", shipping: "" })

  

  return (
    <>
    
    
      <div className={styles.container}>
      
        <Grid container justify="center" spacing={2}>
          <Grid
            item
            xs={12}
            container
            align="center"
            justify="center"
            className={styles.stepperSection}
          >
            <Grid item xs={12}>
              <Typography variant="h3" align="center">
                Checkout
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Stepper
                orientation={stepperOrientation}
                className={styles.stepperSection}
                activeStep={step.activeStep}
              >
                <Step>
                  <StepLabel>Review Items</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Shipping</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Payment</StepLabel>
                </Step>
              </Stepper>
            </Grid>
          </Grid>
          <Grid
            item
            md={7}
            xs={12}
            
            container
            direction="column"
          >
              <Paper className={styles.paperSection}>
            <Typography variant="h6" align="Left" className={styles.cartName}>
              {step.activeStep === 0
                ? "Cart"
                : step.activeStep === 1
                ? "Shipping"
                : "Payment"}
              <br />
              <hr />
            </Typography>
            {step.activeStep === 0 ? (
              <CheckoutItems
                setActiveStep={setActiveStep}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                increaseItemCount={increaseItemCount}
              />
            ) : step.activeStep === 1 ? (
              <ShippingForm setActiveStep={setActiveStep} cartItems={cartItems} formData={formData} setFormData={setFormData} />
            ) : (
              <PaymentForm setActiveStep={setActiveStep}  firstName={formData.firstName} email={formData.email}/>
            )}
            </Paper>
          </Grid>
          <Grid item md={4} xs={12}>
              <Paper className={styles.paperSection}>
            <CheckoutOrderSummary cartItems={cartItems} formData={formData} />
            </Paper>
          </Grid>
        </Grid>
        
      </div>
      
    </>
  );
}
