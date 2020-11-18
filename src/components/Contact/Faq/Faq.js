import React from "react";
import styles from "./Faq.module.css";
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";


import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Faq() {
  return (
    <>
      <Typography variant="h5" align="left" className={styles.sectionTitle}>
        FAQ
        <hr />
      </Typography>

      <Grid container direction="column" spacing={3} justify="Left">
        <Grid item xs={12}>
          <Typography variant="h4" align="left" className={styles.articleTitle}>
            Frequently Asked Questions
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
                Do pets come spayed or neutered?
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
                How can I return a pet?
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
                Do you ship internationally?
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
                Can I get a dog and a cat at the same time?
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
                How many pets can I buy at a time?
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
                Why can't I pay online?
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
                Do you have installment plans?
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
  );
}
