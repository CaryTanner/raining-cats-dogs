import React from 'react'
import styles from './ShippingReturns.module.css'
import {
    Typography,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
  } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";



export default function ShippingReturns(){

    return(
        <>
    <Typography variant="h5" align="left" className={styles.sectionTitle}>
        Shipping &amp; Returns
        <hr />
      </Typography>

      <Grid container direction="column" spacing={3} justify="Left">
        <Grid item xs={12}>
          <Typography variant="h4" align="left" className={styles.articleTitle}>
            Policy on Shipping &amp; Returns
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.questions}>
                Humane and Responsible Animal Transport
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.questions}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.questions}>
                Domestic Shipping
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.questions}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.questions}>
                International Shipping
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.questions}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.questions}>
                Returning Puppies &amp; Kittens
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.questions}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.questions}>
                Returning Adult Dogs &amp; Cats
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.questions}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.questions}>
                Refunds
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.questions}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={styles.questions}>
                Can I pick up my own animal?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.questions}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        
      </Grid>
        
        </>
    )
}