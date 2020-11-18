import React from "react";
import styles from "./PetOwnership.module.css";
import { Typography, Grid } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export default function PetOwnership() {
  return (
    <>
      <Typography variant="h5" align="left" className={styles.sectionTitle}>
        Pet Ownership
        <hr />
      </Typography>

      <Grid container direction="column" spacing={3} justify="Left">
        <Grid item xs={12}>
          <Typography variant="h4" align="left" className={styles.articleTitle}>
            Planning for the Perfect Pet
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <article className={styles.article}>
            <section className={styles.section}>
              <p className={styles.paragraph}>
                It’s about so much more than whether you’re a dog or cat person.
                Do you want an adult dog or cat, or would you prefer a puppy or
                kitten? The commitment is quite different.
              </p>
              <p className={styles.paragraph}>
                Along with lots of fun and excitement, your new family addition
                brings change. Read below for a few things to consider before
                entering into pet parenthood.
              </p>
              <p className={styles.paragraph}>
                Many animals are brought to shelters by people who had good
                intentions when they first acquired them. Before you make the
                decision to bring a furry friend into your life, take a moment
                to consider the following questions.
              </p>
            </section>
            <section className={styles.section}>
              <ul>
                <li>
                  <p className={styles.questionP}>
                    Why do you want a pet?{" "}
                  </p>{" "}
                  Getting a pet just because it’s “the thing to do” or because
                  the kids have been pining for a puppy usually ends up being a
                  big mistake. Pets are a long-term commitment and you may be
                  lucky enough to have one with you for 10, 15 even 20 years.
                </li>
                <li>
                  <p className={styles.questionP}>
                    Do you have time for a pet?
                  </p>{" "}
                  Pets cannot be ignored because you’re tired or busy. They
                  require food, water, exercise, care and companionship every
                  day of the year.
                </li>
                <li>
                  <p className={styles.questionP}>
                    Can you afford a pet?
                  </p>{" "}
                  The costs of pet ownership can be high. Licenses, training,
                  spaying/neutering, grooming, vet care, food, litter, and other
                  expenses add up.
                </li>
                <li>
                  <p className={styles.questionP}>
                    Are you prepared for problems that pets can cause?
                  </p>{" "}
                  Chewed or scratched household items from pets who are young or
                  not yet trained; accidents from animals who aren’t yet
                  housebroken; and unexpected medical emergencies are
                  unfortunate but common aspects of pet ownership.
                </li>
                <li>
                  <p className={styles.questionP}>
                    Can you have a pet where you live?
                  </p>{" "}
                  Find out before you buy. Many rental communities do not
                  allow pets or impose restrictions.
                </li>
                <li>
                  <p className={styles.questionP}>
                    Is it a good time to adopt a pet?
                  </p>{" "}
                  Children under 6 years of age require special consideration
                  when buying a pet. If you are a student, in the military, or
                  travel frequently as part of your work, waiting until you
                  settle down is a wise choice.
                </li>
                <li>
                  <p className={styles.questionP}>
                    Are your living arrangements suitable for the animal you
                    want?{" "}
                  </p>{" "}
                  Getting a large or energetic dog to share a small apartment,
                  for example, is not a good idea. Choose an animal who will be
                  comfortable in your surroundings and with your schedule.
                </li>
                <li>
                  <p className={styles.questionP}>
                    Who will look after your pet when you are away?
                  </p>{" "}
                  You will need reliable friends and neighbours, or money to
                  incur the cost for a boarding kennel or pet sitting service.
                </li>
                <li>
                  <p className={styles.questionP}>
                    Will you be a responsible pet owner?
                  </p>{" "}
                  Your responsibility is to have your pet spayed/neutered, obey
                  leash/licensing laws, and keep identification tags on your
                  pets. Of course, giving your pet love, companionship,
                  exercise, a healthy diet and regular veterinary care are other
                  essentials.
                </li>
                <li>
                  <p className={styles.questionP}>
                    Are you prepared to care for a pet for his/her entire
                    lifetime?
                  </p>{" "}
                  When you adopt a pet, you are making a commitment to care for
                  it for as many as 10, 15, or 20 years.
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://reginahumanesociety.ca/adoptions/how-to-adopt/"
                  >
                    Text adapted from here.{" "}
                    <OpenInNewIcon
                      fontSize="small"
                      className={styles.openIcon}
                    />
                  </a>
                </li>
              </ul>
            </section>
          </article>
        </Grid>

        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>

        <Grid item container xs={12} justify="space-around"></Grid>
      </Grid>
    </>
  );
}
