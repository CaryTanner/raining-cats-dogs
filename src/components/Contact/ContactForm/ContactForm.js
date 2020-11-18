import React, {useState} from "react";
import { Grid, Button,  MenuItem, Select, Typography, Snackbar } from "@material-ui/core";

import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import styles from "./ContactForm.module.css";

import * as Yup from "yup";

export default function ContactForm() {

     // open dialog 
     const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState("")
     
         const handleClick = () => {
             setOpen(true);
             
           };
     
         const handleClose = (event, reason) => {
             if (reason === 'clickaway') {
               return;
             }
     
             setOpen(false)
         }
    
  const handleSubmit = (values, actions) => {
      if(values){
        const {name, email, subject, message } = values
        setOpen(true)
        setFormData({name, email, subject, message })
        actions.resetForm()
      }
      
  };

 console.log(formData)
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()

            .max(25, "Must be 25 characters or less")

            .required("Provide a name"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Provide an email"),
          message: Yup.string().required("Please leave a message"),
          subject: Yup.string().required("Choose a subject"),
        })}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
         

        <Form className={styles.form}>
        <Typography variant="h5" align="left" className={styles.title}> 
         Contact Form
         <hr/>
          </Typography> 
          <Grid container direction="column" spacing={3} justify="center" >
          
          <Grid item  xs={12}>
          
              <Field component={TextField} select variant="outlined" type="text" name="subject" label="Subject" style={{ width: "100%" }}>
                <MenuItem value="dogs">Dogs</MenuItem>
                <MenuItem value="cats">Cats</MenuItem>
                <MenuItem value="shipping">Shipping</MenuItem>
                <MenuItem value="returns">Returns</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Field>
              
            </Grid> 
            <Grid item xs={12}>
              <Field
                component={TextField}
                variant="outlined" 
                name="name"
                type="text"
                label="Name"
                clas
                //inline-styles && extra div's used as formik components don't seem to respond to className based css
                style={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                component={TextField}
                name="email"
                variant="outlined" 
                type="email"
                label="Email"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="message"
                type="text"
                label="Message"
                style={{ width: "100%" }}
                
          
          multiline
          rows={4}
          defaultValue=" "
          variant="outlined"
        
              />
            </Grid>
            
            
            <Grid item container xs={12} justify="space-around">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleSubmit()}
                type="submit"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Form>
        
      </Formik>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        
        message={`Thanks, ${formData.name} We'll contact you at ${formData.email} ASAP!`}
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
