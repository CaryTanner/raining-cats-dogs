import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  AppBar,
  Tabs,
  Tab,
  Button,
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
} from "@material-ui/core";
import AddToCart from "../AddToCart/AddToCart";
import { fetchCatImage } from "../../api";
import { fetchDogImage } from "../../api";
import TabPanel from "../TabPanel/TabPanel";
import styles from "./AnimalPage.module.css";

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

 

  // logic for breed picker
  
  const history = useHistory();

  const handleChange = (event) => {
    setBreeds(event.target.value);
    setBreedsID(event.currentTarget.id);
    history.push(`/${animals}/${event.currentTarget.id}`);
  };

  // get id & animals from params
  const { id, animals } = useParams();
  const animalBreeds = (animals === "dogs" ? dogBreeds : catBreeds)

  // get pics plus all info about breed from image object
  useEffect(() => {
    const fetchAPI = async () => {
      animals === "dogs" ? setAnimalPics(await fetchDogImage(id, 6)) : setAnimalPics(await fetchCatImage(id, 6)) ;
    };

    fetchAPI();
  }, [id]);

  // logic for tabs & panels
  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  //logic for price
  let price = animalPics ? animalPics[0].breeds[0].name.length * 10 : null;

  const cartObj = {
    id: id,
    name: animalPics ? animalPics[0].breeds[0].name : null,
    link: `/${animals}/${id}`,
    pic: animalPics ? animalPics[0].url : null,
    price: price,
  };

  return (
    <>
      {" "}
      <Grid container direction="column" alignItems="center" justify="center">
        <Typography variant="h1" align="center" className={styles.logo}>
          {animalPics ? animalPics[0].breeds[0].name : null}
        </Typography>
        <FormControl className={styles.formControl}>
          <InputLabel id="breed-selector-label" className={styles.inputLabel}>
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
                  <MenuItem key={breed.id} id={breed.id} value={breed.name}>
                    {breed.name}
                  </MenuItem>
                ))
              : null}
          </Select>
        </FormControl>
        <Grid container justify="center">
          <Grid item xs={12} md={5}>
            <GridList className={styles.gridList} cols={columns}>
              {animalPics
                ? animalPics.map((pic) => (
                    <GridListTile rows={tileRows} cols={tileColumns} key={pic.url}>
                      <img src={pic.url} alt="" />
                    </GridListTile>
                  ))
                : null}
            </GridList>
          </Grid>
          <Grid container direction="column" item xs={11} md={6}>
            <Grid item className={styles.tabArea}>
              <AppBar position="static" className={styles.appBar} >
                <Tabs value={value} onChange={handleChangeTabs}>
                  <Tab label="Description" />
                  <Tab label="Facts" />
                  <Tab label="Reviews" />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <Typography
                  variant="body1"
                  align="justify"
                  className={styles.description}
                >
                  {animalPics ? animalPics[0].breeds[0].description : null}
                </Typography>
                <Typography variant="h6">Temperament:</Typography>
                <Typography
                  variant="body1"
                  align="justify"
                  className={styles.temperament}
                >
                  {animalPics ? animalPics[0].breeds[0].temperament : null}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="medium"
                  href={animalPics ? animalPics[0].breeds[0].wikipedia_url : null}
                  className={styles.wikiButton}
                >
                  Learn More
                </Button>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid direction="column">
                  <Grid item>
                    <Typography
                      variant="overline"
                      align="justify"
                      className={styles.facts}
                    >
                      Scale 1-5
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Affection Level:{" "}
                      {animalPics ? animalPics[0].breeds[0].affection_level : null}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Child Friendly:{" "}
                      {animalPics ? animalPics[0].breeds[0].child_friendly : null}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Shedding Level:{" "}
                      {animalPics ? animalPics[0].breeds[0].shedding_level : null}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Energy Level:{" "}
                      {animalPics ? animalPics[0].breeds[0].energy_level : null}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Dog Friendly:{" "}
                      {animalPics ? animalPics[0].breeds[0].dog_friendly : null}
                    </Typography>
                  </Grid>
                  <br />
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Origin: {animalPics ? animalPics[0].breeds[0].origin : null}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Life Span:{" "}
                      {animalPics
                        ? animalPics[0].breeds[0].life_span + " years"
                        : null}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Weight:{" "}
                      {animalPics
                        ? animalPics[0].breeds[0].weight.metric + " Kg"
                        : null}
                    </Typography>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                Be the first to leave a review
              </TabPanel>
            </Grid>
            <Grid item>
              <Typography variant="h5" align="left" className={styles.price}>
                {price ? `$${price}` : null}
              </Typography>
              <AddToCart addToCart={addToCart} item={cartObj} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
