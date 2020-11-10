import React,  { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
 import {fetchCatImage} from '../../api'
import styles from './CatCard.module.css'


export default function CatCard({breed}) {

  const [catPic, setCatPic] = useState('')

  useEffect(() => {
    const fetchAPI = async () => {
      setCatPic(await fetchCatImage(breed.id));
    };

    fetchAPI();
  }, [breed]);

  console.log(catPic)

  return (
    <Card className={styles.root} >
      <CardActionArea>
       {catPic ? <CardMedia
          className={styles.media}
          image={catPic.map( item => item.url)}
          title=""
       />  : null }
        <CardContent>
          <Typography gutterBottom variant="h5"  component="h2">
            {breed.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {breed.temperament}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}