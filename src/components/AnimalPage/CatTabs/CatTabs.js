import React, { useState } from "react";
import { AppBar, Tabs, Tab, Button, Grid, Typography } from "@material-ui/core";
import styles from "./CatTabs.module.css";
import TabPanel from "../TabPanel/TabPanel";

export default function CatTabs({ animalPics }) {

  // logic for tabs & panels
  const [value, setValue] = useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" className={styles.appBar}>
        <Tabs value={value} onChange={handleChangeTabs}>
          <Tab label="Description" />
          <Tab label="Facts" />
          <Tab label="Reviews" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography
          variant="body1"
          align="justify"
          className={styles.description}
        >
          {animalPics ? animalPics[0].breeds[0].description : null}
        </Typography>
        <Typography variant="h6">Temperament:</Typography>
        <Typography
          variant="body1"
          align="justify"
          className={styles.temperament}
        >
          {animalPics ? animalPics[0].breeds[0].temperament : null}
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          size="medium"
          href={animalPics ? animalPics[0].breeds[0].wikipedia_url : null}
          className={styles.wikiButton}
        >
          Learn More
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid direction="column">
          <Grid item>
            <Typography
              variant="overline"
              align="justify"
              className={styles.facts}
            >
              Scale 1-5
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              className={styles.facts}
            >
              Affection Level:{" "}
              {animalPics ? animalPics[0].breeds[0].affection_level : null}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              className={styles.facts}
            >
              Child Friendly:{" "}
              {animalPics ? animalPics[0].breeds[0].child_friendly : null}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              className={styles.facts}
            >
              Shedding Level:{" "}
              {animalPics ? animalPics[0].breeds[0].shedding_level : null}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              className={styles.facts}
            >
              Energy Level:{" "}
              {animalPics ? animalPics[0].breeds[0].energy_level : null}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              className={styles.facts}
            >
              Dog Friendly:{" "}
              {animalPics ? animalPics[0].breeds[0].dog_friendly : null}
            </Typography>
          </Grid>
          <br />
          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              className={styles.facts}
            >
              Origin: {animalPics ? animalPics[0].breeds[0].origin : null}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              className={styles.facts}
            >
              Life Span:{" "}
              {animalPics ? animalPics[0].breeds[0].life_span + " years" : null}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              className={styles.facts}
            >
              Weight:{" "}
              {animalPics
                ? animalPics[0].breeds[0].weight.metric + " Kg"
                : null}
            </Typography>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Be the first to leave a review
      </TabPanel>
    </>
  );
}
