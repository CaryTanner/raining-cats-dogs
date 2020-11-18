import React, { useState } from "react";
import {
  Typography,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  useTheme,
  useMediaQuery
} from "@material-ui/core";

import AnimalCard from "../AnimalCard/AnimalCard";
import { useHistory, useParams } from "react-router-dom";
import styles from "./AnimalMain.module.css";

export default function AnimalMain({ catBreeds, dogBreeds }) {
  const [selectedBreed, setBreeds] = useState("");
  const [selectedBreedID, setBreedsID] = useState("");

  //logic for title alignment

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const titleAlignment = isMobile ? "center" : "left"
  const breedSelectorAlignment = isMobile ? "center" : "right"


  //use params and history for navigation and select which API to call, breeds to use 

  let history = useHistory();
  const { animals } = useParams();
  const animalBreeds = (animals === "dogs" ? dogBreeds : catBreeds)
  const animalUrl = (animals === "dogs" ? 'dogs' : 'cats')

  // breed picker sends user to specific page

  const handleChange = (event) => {
    setBreeds(event.target.value);
    setBreedsID(event.currentTarget.id);
    history.push(`/breeds/${animals}/${event.currentTarget.id}`);
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
          <Grid item container direction="row">
            <Grid item sm={6}  xs={12} >
            <Typography variant="h1" align={titleAlignment} className={styles.logo}>
              {animals === "dogs" ? `Dogs` : `Cats` }
            </Typography>
            </Grid>
            <Grid item sm={6} xs={12} align={breedSelectorAlignment} >
            <FormControl className={styles.formControl} color="secondary">
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
          </Grid>
          <Grid container item spacing={3}>
            {catBreeds && dogBreeds
              ? animalBreeds.map((breed) => (
                  <Grid  align="center" item key={breed.id} xs={12} sm={6} md={3}>
                    <AnimalCard
                      className={styles.card}
                      id={breed.id}
                      breed={breed}
                      animalUrl={animalUrl}
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
