import React from "react";

import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealslug);

  //if meal is undefined, if we didn't find the meal and then show the closest not found page available in this project, that can indeed be triggered by calling a special function that's provided by Next.js

  if (!meal) {
    //calling this function will stop this component from executing and will show the closest not-found or error page
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            {/* Here we are using the regular anchor element because this should actually be a link that allows us to send the email to that creator, therefore the actual href value will be a dynamiclly generated string*/}
            by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailsPage;
