import React, { useState, useEffect } from "react";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid
} from "@material-ui/core";

import { fetchCatImage } from "../../api";
import { fetchDogImage } from "../../api";
import styles from "./AnimalCard.module.css";
import { useHistory, useParams } from "react-router-dom";

export default function AnimalCard({ breed, animalUrl }) {
  
  const [animalPic, setAnimalPic] = useState("");
  
  //use history/params for which API to call 

  const {id, animals } = useParams()
  let history = useHistory();

  //get a pic for each breed id
  useEffect(() => {
    const fetchAPI = async () => {
      animalUrl === "dogs" ? setAnimalPic(await fetchDogImage(breed.id, 1)) : setAnimalPic(await fetchCatImage(breed.id, 1)) ;
    };

    fetchAPI();
  }, [breed]);

  // logic of card click to send to individual page
  function handleClickLink(event) {
    history.push(`/breeds/${animalUrl}/${event.currentTarget.id}`);
  }

  return (
    <Card className={styles.root} onClick={handleClickLink} id={breed.id}>
      <CardActionArea>
        {animalPic ? (
          <CardMedia
            className={styles.media}
            image={animalPic.map((item) => item.url)}
            title=""
          />
        ) : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {breed.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {breed.temperament}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="space-around">
        <Button size="small" color="secondary" >
          See More
        </Button>
        <Typography gutterBottom variant="h5" component="h2">
            {`$${breed.name.length*10}`}
          </Typography>
          </Grid> 
      </CardActions>
    </Card>
  );
}
