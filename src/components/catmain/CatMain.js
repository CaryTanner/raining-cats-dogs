import React, { useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

import CatCard from "../catcard/CatCard";
import { useHistory } from 'react-router-dom'
import styles from "./CatMain.module.css";

export default function CatMain({ catBreeds }) {
  const [selectedBreed, setBreeds] = useState("");
  const [selectedBreedID, setBreedsID] = useState("");

  //get all breeds and filter to selected letter
  
  let history = useHistory();

  useEffect(() => {}, []);

  const handleChange = (event) => {
    setBreeds(event.target.value);
    setBreedsID(event.currentTarget.id);
    history.push(`/cats/${event.currentTarget.id}`)
  };
  
  
  
  // function handleClickLink(path) {
  //   history.push(path);
  // }

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
          <Grid item>
            <Typography variant="h1" align="center" className={styles.logo}>
              Cats
            </Typography>

            <FormControl className={styles.formControl}>
              <InputLabel id="breed-selector-label">Breed</InputLabel>
              <Select
                labelId="breed-selector-label"
                id=""
                value={selectedBreed}
                onChange={handleChange}
              >
                {catBreeds
                  ? catBreeds.map((breed) => (
                      <MenuItem id={breed.id} value={breed.name}>
                        {" "}
                        {breed.name}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            </FormControl>
          </Grid>
          <Grid
           justify="center"
           alignItems="center"
            container
            item
            spacing={2}
          >
            {catBreeds
              ? catBreeds.map((breed) => (
                  <Grid item xs={12} sm={6} md={3}>
                    {" "}
                    <CatCard breed={breed} />
                  </Grid>
                ))
              : null}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
