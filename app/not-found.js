//There's another kind of error that could occur, what happens when a user enters invalid URL
//You can add this file anywhere in the app folder and it wil automatically cover any sibling or nested pages, so if we add it here on the root level, we can siply catch all not found errors that might be generated from anywhere in this application


//If you would want to be more granular, and maybe show more granular error messages, you could nest this into some other folder



export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not Found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
    </main>
  );
}
