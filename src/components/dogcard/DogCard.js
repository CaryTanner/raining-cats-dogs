import React,  { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
 import {fetchDogImage} from '../../api'
import styles from './DogCard.module.css'
import { useHistory } from "react-router-dom";


export default function DogCard({breed}) {
    
    

  const [dogPic, setDogPic] = useState('')

  useEffect(() => {
    const fetchAPI = async () => {
      setDogPic(await fetchDogImage(breed.id, 1));
    };

    fetchAPI();
  }, [breed]);

   // logic of card click to send to individual page

   let history = useHistory()

   function handleClickLink(event) {
    history.push(`/dogs/${event.currentTarget.id}`);
  }

  

  return (
    <Card className={styles.root} onClick={handleClickLink} id={breed.id} >
      <CardActionArea>
       {dogPic ? <CardMedia
          className={styles.media}
          image={dogPic.map(item => item.url)}
          title=""
       />  : null }
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