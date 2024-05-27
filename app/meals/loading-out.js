//this file will become active if the page next to it or any nested page or layout is loading data

import classes from "./loading.module.css";

export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching Meals...</p>;
}
