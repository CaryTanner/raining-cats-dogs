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

import AnimalCard from "../AnimalCard/AnimalCard";
import { useHistory, useParams } from "react-router-dom";
import styles from "./AnimalMain.module.css";

export default function AnimalMain({ catBreeds, dogBreeds }) {
  const [selectedBreed, setBreeds] = useState("");
  const [selectedBreedID, setBreedsID] = useState("");

  let history = useHistory();
  const { animals } = useParams();
  console.log(animals)
  const animalBreeds = (animals === "dogs" ? dogBreeds : catBreeds)

  // breed picker sends user to specific page

  const handleChange = (event) => {
    setBreeds(event.target.value);
    setBreedsID(event.currentTarget.id);
    history.push(`/${animals}/${event.currentTarget.id}`);
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
              {animals === "dogs" ? `Dogs` : `Cats` }
            </Typography>

            <FormControl className={styles.formControl}>
              <InputLabel id="breed-selector-label">Breeds</InputLabel>
              <Select
                labelId="breed-selector-label"
                id=""
                value={selectedBreed}
                onChange={handleChange}
                >
                {catBreeds && dogBreeds
                  ? animalBreeds.map((breed) => (
                      <MenuItem key={breed.id} id={breed.id} value={breed.name}>
                        {breed.name}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
          </Grid>
          <Grid container item spacing={3}>
            {catBreeds && dogBreeds
              ? animalBreeds.map((breed) => (
                  <Grid  align="center" item key={breed.id} xs={12} sm={6} md={3}>
                    <AnimalCard
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
