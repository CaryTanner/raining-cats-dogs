import React from "react";
import {
  Grid,
  Button,
  FormLabel,
  FormControlLabel,
  Radio,
  Paper
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField, RadioGroup } from "formik-material-ui";
import styles from "./ShippingForm.module.css";

import * as Yup from "yup";


export default function ShippingForm({
  setActiveStep,
  cartItems,
  formData,
  setFormData,
}) 
    {

  // shiping form values and submit -state is stored in Checkout.js 

  const { firstName, lastName, email, address, city, shipping } = formData;

  const handleSubmit = (values) => {
    if (values) {
      const { firstName, lastName, email, address, city, shipping } = values;
      setActiveStep({ type: "increment" });
      setFormData({ firstName, lastName, email, address, city, shipping });
      
      return;
    }
  };

  
  

  return (
    <>
      <Formik
        initialValues={{ firstName, lastName, email, address, city, shipping }}
        validationSchema={Yup.object({
          firstName: Yup.string()

            .max(15, "Must be 15 characters or less")

            .required("Required"),

          lastName: Yup.string()

            .max(20, "Must be 20 characters or less")

            .required("Required"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          address: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          shipping: Yup.string().required("Required"),
        })}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
            
          <Grid container xs={12}  spacing={3}>
            
              <Grid item md={6} xs={12}> 
              <Field
                component={TextField}
                name="firstName"
                type="text"
                label="First Name"
                clas
                //inline-styles && extra div's used as formik components don't seem to respond to className based css  
                style={{width: '100%'}}
                
              />
              </Grid> 
           
              <Grid item md={6} xs={12}> 
              <Field
                component={TextField}
                name="lastName"
                type="text"
                label="Last Name"
                
                style={{width: '100%'}}
              />
            </Grid>

            <Grid item md={6} xs={12} >
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                
                style={{width: '100%'}}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                component={TextField}
                name="address"
                type="text"
                label="Address"
                
                style={{width: '100%'}}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Field
                component={TextField}
                name="city"
                type="text"
                label="City"
                
                style={{width: '100%'}}
              />
            </Grid>
            <Grid item md={6} xs={12} >
                
                <FormLabel component="body1" >Shipping Options</FormLabel>
              
              <Field
                component={RadioGroup}
                name="shipping"
                type="radio"
                
                defaultValue={shipping ? shipping : null}
                
              >
                <FormControlLabel
                  
                  value="standard" 
                  control={<Radio color="primary" />}
                  label="Standard: Free Shipping"
                  labelPlacement="end"
                />
                <FormControlLabel
                  
                  value="express" 
                  control={<Radio color="primary" />}
                  label="Express: Max. One Week Delivery +$30"
                  labelPlacement="end"
                />
                <div className={styles.shippingError}>
               <ErrorMessage name="shipping"  />
               </div>
              </Field>
              
            </Grid>
            <Grid item container xs={12} justify="space-around">
              <Button
                variant="contained"
                color="primary"
                onClick={() => setActiveStep({ type: "decrement" })}
              >
                {" "}
                <ArrowBackIosIcon fontSize="small" />
                Review Items
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSubmit()}
                type="submit"
                
              >
                {" "}
                Payment <ArrowForwardIosIcon fontSize="small" />
              </Button>
            </Grid>
          </Grid>
          
        </Form>
      </Formik>
    </>
  );
}
