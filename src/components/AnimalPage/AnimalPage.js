import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  GridList,
  GridListTile,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  useTheme,
  useMediaQuery,
  Container,
  Link
} from "@material-ui/core";
import AddToCart from "./AddToCart/AddToCart";
import { fetchCatImage } from "../../api";
import { fetchDogImage } from "../../api";

import styles from "./AnimalPage.module.css";
import DogTabs from "./DogTabs/DogTabs";
import CatTabs from "./CatTabs/CatTabs";


export default function AnimalPage({ dogBreeds, catBreeds, addToCart }) {
  const [animalPics, setAnimalPics] = useState("");
  const [selectedBreed, setBreeds] = useState("");
  const [selectedBreedID, setBreedsID] = useState("");

  // set number of columns on gridlist for mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const columns = isMobile ? 2 : 3;
  const tileColumns = animalPics.length > 1 ? 1 : 3;
  const tileRows = animalPics.length > 1 ? 1 : 2;

  //logic for title alignment

  const titleAlignment = isMobile ? "center" : "left";
  const breedSelectorAlignment = isMobile ? "center" : "right";

  // logic for breed picker

  const history = useHistory();

  const handleChange = (event) => {
    setBreeds(event.target.value);
    setBreedsID(event.currentTarget.id);
    history.push(`/breeds/${animals}/${event.currentTarget.id}`);
  };

  // get id & animals from params
  const { id, animals } = useParams();
  const animalBreeds = animals === "dogs" ? dogBreeds : catBreeds;

  // get pics plus all info about breed from image object
  useEffect(() => {
    const fetchAPI = async () => {
      animals === "dogs"
        ? setAnimalPics(await fetchDogImage(id, 6))
        : setAnimalPics(await fetchCatImage(id, 6));
    };

    fetchAPI();
  }, [id]);

  //logic for price
  let price = animalPics ? (id === '23' ? (animalPics[0].breeds[0].name.length * 10) / 2 : (animalPics[0].breeds[0].name.length * 10)) : null;

  //item to add to cart
  const cartObj = {
    id: id,
    name: animalPics ? animalPics[0].breeds[0].name : null,
    link: `/breeds/${animals}/${id}`,
    pic: animalPics ? animalPics[0].url : null,
    price: price,
  };

  //open animal pics in new window/tab
  const photoLink = (link) =>{
    window.open(link)
  }

  return (
    <>
      {" "}
      <Container>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item container direction="row">
            <Grid item sm={6} md={10} xs={12}>
              <Typography
                variant="h1"
                align={titleAlignment}
                className={styles.logo}
              >
                {animalPics ? animalPics[0].breeds[0].name : null}
              </Typography>
            </Grid>

            <Grid item sm={6} md={2} xs={12} align={breedSelectorAlignment}>
              <FormControl className={styles.formControl} color="secondary">
                <InputLabel
                  id="breed-selector-label"
                  className={styles.inputLabel}
                >
                  Breeds
                </InputLabel>
                <Select
                  labelId="breed-selector-label"
                  id=""
                  value={selectedBreed}
                  onChange={handleChange}
                >
                  {catBreeds && dogBreeds
                    ? animalBreeds.map((breed) => (
                        <MenuItem
                          key={breed.id}
                          id={breed.id}
                          value={breed.name}
                        >
                          {breed.name}
                        </MenuItem>
                      ))
                    : null}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item container justify="center" spacing={1}>
            <Grid item xs={12} md={6}>
              <GridList className={styles.gridList} cols={columns}>
                {animalPics
                  ? animalPics.map((pic) => (
                    
                      <GridListTile
                        rows={tileRows}
                        cols={tileColumns}
                        key={pic.url}
                        onClick={()=> photoLink(pic.url)}
                        className={styles.gridListTile}
                      >
                         
                        <img src={pic.url} alt="" />
                       
                      </GridListTile>
                      
                    ))
                  : null}
              </GridList>
            </Grid>
            <Grid container direction="column" item xs={12} md={6}>
              <Grid item className={styles.tabArea}>
                {animals === "dogs" ? (
                  <DogTabs animalPics={animalPics} />
                ) : null}
                {animals === "cats" ? (
                  <CatTabs animalPics={animalPics} />
                ) : null}
              </Grid>
              <Grid item>
                <Typography variant="h5" align="left" className={styles.price}>
                  {price ? `$${price}` : null}
                  {id == 23 ? ` -- NOW 50% OFF! --` : null}
                </Typography>
                <AddToCart addToCart={addToCart} item={cartObj} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
    </>
  );
}
