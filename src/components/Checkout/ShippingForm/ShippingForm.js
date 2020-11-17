import React from "react";
import {
  Grid,
  Button,
  FormLabel,
  FormControlLabel,
  Radio,
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
}) {
  const { firstName, lastName, email, address, shipping } = formData;

  const handleSubmit = (values) => {
    if (values) {
      const { firstName, lastName, email, address, shipping } = values;
      setActiveStep({ type: "increment" });
      setFormData({ firstName, lastName, email, address, shipping });
      console.log(values);
      return;
    }
  };
  

  return (
    <>
      <Formik
        initialValues={{ firstName, lastName, email, address, shipping }}
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
          shipping: Yup.string().required("Required"),
        })}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <Grid container xs={12} align="center"  spacing={3}>
            <Grid item xs={12} >
                
              <Field
                component={TextField}
                name="firstName"
                type="text"
                label="First Name"
                className={styles.input}
                
                
              />
              
            </Grid>
            <Grid item>
              <Field
                component={TextField}
                name="lastName"
                type="text"
                label="Last Name"
                className={styles.input}
              />
            </Grid>
            <Grid item>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                className={styles.input}
              />
            </Grid>
            <Grid item>
              <Field
                component={TextField}
                name="address"
                type="text"
                label="Address"
                className={styles.input}
              />
            </Grid>
            <Grid item  >
                <div className={styles.shippingOptions}>
                <FormLabel component="body1" >Shipping Options</FormLabel>
              
              <Field
                component={RadioGroup}
                name="shipping"
                type="radio"
                className={styles.input}
                defaultValue={shipping ? shipping : null}
                
              >
                <FormControlLabel
                  
                  value="standard" 
                  control={<Radio color="primary" />}
                  label="Standard"
                  labelPlacement="end"
                />
                <FormControlLabel
                  
                  value="express" 
                  control={<Radio color="primary" />}
                  label="Express"
                  labelPlacement="end"
                />
                <div className={styles.shippingError}>
               <ErrorMessage name="shipping"  />
               </div>
              </Field>
              </div>
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
