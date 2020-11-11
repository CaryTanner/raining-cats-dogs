import React, { useState, useEffect } from "react";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import { fetchCatImage } from "../../api";
import styles from "./CatCard.module.css";
import { useHistory } from "react-router-dom";

export default function CatCard({ breed }) {
  const [catPic, setCatPic] = useState("");

  let history = useHistory();

  //get a pic for each breed id
  useEffect(() => {
    const fetchAPI = async () => {
      setCatPic(await fetchCatImage(breed.id, 1));
    };

    fetchAPI();
  }, [breed]);

  // logic of card click to send to individual page
  function handleClickLink(event) {
    history.push(`/cats/${event.currentTarget.id}`);
  }

  return (
    <Card className={styles.root} onClick={handleClickLink} id={breed.id}>
      <CardActionArea>
        {catPic ? (
          <CardMedia
            className={styles.media}
            image={catPic.map((item) => item.url)}
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
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
