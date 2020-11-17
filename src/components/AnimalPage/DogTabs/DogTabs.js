import React, { useState } from "react";
import { AppBar, Tabs, Tab, Grid, Typography } from "@material-ui/core";

import styles from "./DogTabs.module.css";
import TabPanel from "../TabPanel/TabPanel";

export default function DogTabs({ animalPics }) {
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
        <Typography variant="h5" align="left" className={styles.temperament}>
          {animalPics ? animalPics[0].breeds[0].temperament : null}
        </Typography>
        <Typography variant="h6" align="justify" className={styles.description}>
          {animalPics
            ? animalPics[0].breeds[0].bred_for
              ? "Bred for: " + animalPics[0].breeds[0].bred_for
              : null
            : null}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid direction="column">
          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              className={styles.facts}
            >
              Life Span: {animalPics ? animalPics[0].breeds[0].life_span : null}
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
                ? animalPics[0].breeds[0].weight.metric + " kg"
                : null}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="justify"
              className={styles.facts}
            >
              Height:{" "}
              {animalPics
                ? animalPics[0].breeds[0].height.metric + " cg"
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
