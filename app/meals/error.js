//Will handle potential errors which might be generated by your pages and components, for example if loading some data fails

//now therefore it's a good idea to add some error handling to your application, and you can do that by adding an error.js file. In that file you then setup a component that will be rendered by nextjs whenever an error occurs, though it will only handle errors that occur in the page that sits on the same folder as this error.js file or any nested page or layout.

// therefore you could ofcourse also add this on the root level of your application to catch any error that's caused anywhere in any of your pages.

//To learn more about this error we can actually use some props here in this error page component because when setting up such components in such a error.js file, next.js will pass some prop to that component. Most importantly it will provide an error prop which can contain more details about the error.

// Now the actual error message will actually be hidden by next.js so that you can't accidentally expose any information that shouln't be exposed to youe end errors.

//But if your error would be an object that also contain some error code or anything like that, you could use that here in your component to shpw a more fine tuned error message

export default function Error() {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to fetch meal data. Please try again later.</p>
    </main>
  );
}
