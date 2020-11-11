import React, { useState } from "react";
import {
  Typography,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@material-ui/core";

import CatCard from "../CatCard/CatCard";
import { useHistory } from "react-router-dom";
import styles from "./CatMain.module.css";

export default function CatMain({ catBreeds }) {
  const [selectedBreed, setBreeds] = useState("");
  const [selectedBreedID, setBreedsID] = useState("");

  let history = useHistory();

  // breed picker sends user to specific page

  const handleChange = (event) => {
    setBreeds(event.target.value);
    setBreedsID(event.currentTarget.id);
    history.push(`/cats/${event.currentTarget.id}`);
  };

  
  return (
    <>
      <Container>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item >
            <Typography variant="h1" align="center" className={styles.logo}>
              Cats
            </Typography>

            <FormControl className={styles.formControl}>
              <InputLabel id="breed-selector-label">Breeds</InputLabel>
              <Select
                labelId="breed-selector-label"
                id=""
                value={selectedBreed}
                onChange={handleChange}
              >
                {catBreeds
                  ? catBreeds.map((breed) => (
                      <MenuItem key={breed.id} id={breed.id} value={breed.name}>
                        {breed.name}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
          </Grid>
          <Grid container item spacing={3}>
            {catBreeds
              ? catBreeds.map((breed) => (
                  <Grid  align="center" item key={breed.id} xs={12} sm={6} md={3}>
                    <CatCard
                      className={styles.card}
                      id={breed.id}
                      breed={breed}
                    />
                  </Grid>
                ))
              : null}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
