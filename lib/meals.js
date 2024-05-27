//in here write the code that reaches out to the database and get data from that database

import sql from "better-sqlite3";

//establish the database connection by executing sql as a function and then passing the name of the database here as a string to that function

const db = sql("meals.db");

//and then we can work on this db object to perform actions on that database

export async function getMeals() {
  //prepare new statement, a new sql statement that should be executed
  //here it is multiple rows so it's all()

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

//run() would be used if you were inserting data for example, if you were changing data
//all() is used if you are fetching data and you wanna get back all the rows that are fetched by that statement
//if you are looking for a single row you could use get() instead.
