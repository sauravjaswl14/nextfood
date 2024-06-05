import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";

export default function ShareMealPage() {
  //we have seen the 'use client' directive before which however was not added inside of functions but inside of files, and then when added there, 'use client' made sure that the components created in that file would be client components.

  //'use server' inside of a function is different because this creates a so-called Server Action, which is a function that's guaranteed to execute on the server, and only there. So just as components by default are server components which only execute on the server, this is now a function that only executes on a server. But in case of functions, you must explicitly state that it belongs to the server by adding this directive inside of them, if you wanna create such a Server Action. In addition to really turn this into a so called Server Action, you also must add the "async" keyword in front of it.

  //This feature exists because you can now take such a Server Action and assign this Server Action function as a value for the action prop on a function.

  //normally, the action prop is set to the path to which the request should be sent if you are relying on the browser's built-in form handling capabilities. Now that's not what we're doing here, Instead we're setting it to an action, to such a Server Action function

  //And that's a pattern that's supported by Next and React here that will ensure that when this form is submitted, Next.js will behind the scenes create a request and send it to this Next.js server that's serving the website so that this function gets triggered, and you can then handle the form submission there, but on the server. So, that function will then execute on the server,not in the client.

  //And this function will then automatically receive that formData that was submitted. So, the data that was gathered by the inputs in the form collected in a formData object, using that FormData class that's available in javascript

  async function shareMeal(formData) {
    "use server";

    const meal = {
      title: formData.get("title"),
      //this formData object that we're getting will have a get method that allows us to get the value that was entered into a certain input field, and the input field is identified by its name
    };
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
