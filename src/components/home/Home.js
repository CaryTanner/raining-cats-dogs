import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import styles from "./Home.module.css";
import { useHistory, useEffect } from "react-router-dom";
import { useParams } from 'react-router-dom'
import AnimalCard from "../AnimalCard/AnimalCard";

export default function Home({ catBreeds, dogBreeds }) {

  // router logic
  let history = useHistory();

  function handleClickLink(path) {
    history.push(path);
  }

  // params for nav highlight
  


  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12} className={styles.heroPic}>
        <Typography variant="h2" className={styles.tagline}>
            PUREBRED <br/> CATS&nbsp;&amp;&nbsp;DOGS
          </Typography>
        
          <Button
            href="/breeds/cats"
            variant="contained"
            color="secondary"
            className={styles.button1}
            size="large"
          >
            Find Cats
          </Button>
          <Button
            href="/breeds/dogs"
            variant="contained"
            color="secondary"
            className={styles.button2}
            size="large"
          >
            Find Dogs
          </Button>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          container
          
          className={styles.firstSection}
          justify="space-evenly"
          
        >
          <Grid item md={2} sm={3} xs={12} className={styles.firstSectionA} container direction="column" justify="space-between">
            <Typography variant="h3" className={styles.firstSectionAText}>
              DOG OF <br />
              THE <br /> MONTH
              <br/>
              <br/>
              50% OFF
            </Typography>
            
            <Button
              href="/breeds/dogs/23"
              variant="contained"
              color="secondary"
              className={styles.firstSectionButton}
            >
              shop Now
            </Button>
          </Grid>
          <Grid item sm={4} xs={12} className={styles.firstSectionB} container direction="column" justify="space-between">
            <Typography variant="h3" className={styles.firstSectionBText}>
              PROUD <br /> PUPPIES
            </Typography>

            <Button
              href="/breeds/dogs"
              variant="contained"
              color="secondary"
              className={styles.firstSectionButton}
            >
              shop Now
            </Button>
          </Grid>

          <Grid item sm={4} xs={12} className={styles.firstSectionC} container direction="column" justify="space-between">
            <Typography variant="h3" className={styles.firstSectionCText}>
              CUTE <br /> KITTENS
            </Typography>

            <Button
              href="/breeds/cats"
              variant="contained"
              color="secondary"
              className={styles.firstSectionButton}
              
            >
              shop Now
            </Button>
          </Grid>
        </Grid>
        
        <Grid
          item
          container
          xs={12}
          className={styles.articleSection}
          alignItems="center"
          justify="center"
        >
          <Grid item md={11} xs={12} className={styles.secondSectionA}>
            <Typography variant="h1" className={styles.secondSectionATextTitle}>
              Pet <br /> Ownership
            </Typography>
            <Typography variant="h4" className={styles.secondSectionAText}>
              ___
            </Typography>
            <Typography variant="h3" className={styles.secondSectionAText}>
              Plan the Perfect Pet
            </Typography>
            <Button href="/contact/pet_ownership" variant="contained" color="secondary">
              Learn More
            </Button>
          </Grid>
        </Grid>
        
      </Grid>
      <Grid
          item
          container
          xs={12}
          className={styles.thirdSection}
          alignItems="center"
          justify="space-evenly"
        >
          <Grid item xs={12} alignItems="center" justify="center">
          <Typography align="center" variant="h2" className={styles.thirdSectionTitle}>
              STAFF FAVORITES
            </Typography>
          </Grid>
          {catBreeds && dogBreeds ? (
            <Grid item md={4}  sm={3} xs={12}  align="center" className={styles.thirdSectionCard}>
              <AnimalCard
                className={styles.card}
                id={dogBreeds[138].id}
                breed={dogBreeds[138]}
                animalUrl="dogs"
              />
            </Grid>
          ) : null}
          {catBreeds && dogBreeds ? (
            <Grid item md={4} sm={3} xs={12} align="center" className={styles.thirdSectionCard}>
              <AnimalCard
                className={styles.card}
                id={catBreeds[21].id}
                breed={catBreeds[21]}
                animalUrl="cats"
              />
            </Grid>
          ) : null}
          {catBreeds && dogBreeds ? (
            <Grid item md={4} sm={3} xs={12}  align="center" className={styles.thirdSectionCard}>
              <AnimalCard
                className={styles.card}
                id={dogBreeds[62].id}
                breed={dogBreeds[62]}
                animalUrl="dogs"
              />
            </Grid>
          ) : null}
        </Grid>
        
    </>
  );
}
