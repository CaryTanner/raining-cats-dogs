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
import { fetchDogImage } from "../../api";
import TabPanel from "../TabPanel/TabPanel";
import styles from "./DogPage.module.css";

export default function DogPage({ dogBreeds, addToCart }) {

  const [dogPics, setDogPics] = useState("");
  const [selectedBreed, setBreeds] = useState("");
  const [selectedBreedID, setBreedsID] = useState("");

  // set number of columns on gridlist for mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const columns = isMobile ? 2 : 3;
  const tileColumns = dogPics.length > 1 ? 1 : 3;
  const tileRows = dogPics.length > 1 ? 1 : 2;

  let history = useHistory();

  // logic for breed picker

  const handleChange = (event) => {
    setBreeds(event.target.value);
    setBreedsID(event.currentTarget.id);
    history.push(`/dogs/${event.currentTarget.id}`);
  };

  // get id from params
  const { id } = useParams();
  
  // get pics plus all info about breed from image object
  useEffect(() => {
    const fetchAPI = async () => {
      setDogPics(await fetchDogImage(id, 6));
    };

    fetchAPI();
  }, [id]);

  console.log(dogPics)

  // logic for tabs & panels
  const [value, setValue] = useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  //logic for price
  let price = dogPics ? dogPics[0].breeds[0].name.length * 10 : null;

  const cartObj = {
    id: id,
    name: dogPics ? dogPics[0].breeds[0].name : null,
    link: `/dogs/${id}`,
    pic: dogPics ? dogPics[0].url : null,
    price: price,
  };

  return (
    <>
      {" "}
      <Grid container direction="column" alignItems="center" justify="center">
        <Typography variant="h2" align="center" className={styles.logo}>
          {dogPics ? dogPics[0].breeds[0].name : null}
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
            {dogBreeds
              ? dogBreeds.map((breed) => (
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
              {dogPics
                ? dogPics.map((pic) => (
                    <GridListTile  rows={tileRows} cols={tileColumns} key={pic.url}>
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
                  {dogPics ? dogPics[0].breeds[0].description : null}
                </Typography>
                
                
                <Typography
                  variant="h6"
                  align="justify"
                  className={styles.temperament}
                >
                  {dogPics ? dogPics[0].breeds[0].temperament : null}

                </Typography>
                
                <Typography
                  variant="body1"
                  align="justify"
                  className={styles.description}
                >
                  {dogPics ? `Bred for: ${dogPics[0].breeds[0].bred_for} ` : null}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="medium"
                  href={dogPics ? dogPics[0].breeds[0].wikipedia_url : null}
                  className={styles.wikiButton}
                >
                  Learn More
                </Button>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid direction="column">
               
                  <br />
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Origin: {dogPics ? dogPics[0].breeds[0].history : null}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Life Span:{" "}
                      {dogPics
                        ? dogPics[0].breeds[0].life_span 
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
                      {dogPics
                        ? dogPics[0].breeds[0].weight.metric + " kg"
                        : null}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="justify"
                      className={styles.facts}
                    >
                      Height:{" "}
                      {dogPics
                        ? dogPics[0].breeds[0].height.metric + " cm"
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
