import React from "react";
import styles from "./HumaneBreeding.module.css";
import { Typography, Grid } from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export default function HumaneBreeding() {
  return (
    <>
      <Typography variant="h5" align="left" className={styles.sectionTitle}>
        Humane Breeding
        <hr />
      </Typography>

      <Grid container direction="column" spacing={3} justify="Left">
        <Grid item xs={12}>
          <Typography variant="h4" align="left" className={styles.articleTitle}>
            We Promote Responsible Breeding
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <article className={styles.article}>
            <section className={styles.section}>
              <p className={styles.paragraph}>
                Raining Cats and Dogs supports reputable breeders and
                responsible breeding of companion animals. However, inhumane and
                inadequate breeding facilities exist; therefore, we encourage
                individuals to exercise caution when purchasing.
              </p>
              <p className={styles.paragraph}>
                Reputable and responsible breeding operations play a role in
                preserving and enhancing the very best characteristics of the
                breed and are committed to the humane care of their breeding
                animals and their breeding animals’ offspring.
              </p>
              <p className={styles.paragraph}>
                Breeders must be ethical, committed to exceptional care of their
                animals, educate themselves to recognize inherited disorders and
                sterilize animals that could pass on these disorders.
              </p>
              <p className={styles.paragraph}>
                We advocate for altering breed standards to eliminate those
                which may prove detrimental to an animal’s health and contribute
                to ongoing inherited disorders.
              </p>
              <p className={styles.paragraph}>
                Before Raining Cats and Dogs purchases from a breeder we research potential
                breeders to ensure they’re not supporting inhumane and
                inadequate breeding practices. Responsible breeders do the
                following:
              </p>
            </section>
            <section className={styles.section}>
              <ul>
                <li>Specialize in one or two breeds.</li>
                <li>
                  Adhere to State and/or USDA regulations breeders and breeding
                  facilities.
                </li>
                <li>
                  Demonstrate extensive knowledge of the breed’s history,
                  traits, temperament and conformation.
                </li>
                <li>
                  Value their reputation for seeking to improve their breed(s).
                </li>
                <li>
                  Breed their animals only a limited number of times — not every
                  year or multiple times each year.
                </li>
                <li>
                  Consistently evaluate the health of their breeding animals and
                  their offspring to ensure the well-being and optimal health of
                  all animals in their care.
                </li>
                <li>
                  Allow consumers to tour the premises where the breeding
                  operation takes place and to meet the parents of animals being
                  bred.
                </li>
                <li>
                <a target="_blank" rel="noreferrer" href="https://www.animalhumanesociety.org/about/animal-humane-society-position-breeding-companion-animals
" >Text adapted from here. <OpenInNewIcon fontSize="small" className={styles.openIcon}/></a>
                </li>
                
              </ul>
              
            </section>
            
          </article>
        </Grid>

        
      </Grid>
    </>
  );
}
