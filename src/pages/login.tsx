import { useLocation } from "preact-iso";
import documentTitle from "../helper-functions/document-title";

export default function login() {
  documentTitle("Login Page");
  const location = useLocation();

  function handleSubmit(e: any) {
    e.preventDefault();
    // Do some database logic
    location.route("/dashboard");
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
        ></input>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <p>
        Want to sign up? Register <a href={"/register"}>here.</a>
      </p>
    </>
  );
}
