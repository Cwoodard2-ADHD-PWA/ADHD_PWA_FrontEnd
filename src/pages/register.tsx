import { useLocation } from "preact-iso";
import documentTitle from "../helper-functions/document-title";

export default function register() {
  documentTitle("Register Page");
  const location = useLocation();

  function handleSubmit(e: any) {
    e.preventDefault();
    // Do some database logic
    location.route("/");
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label for="name">Name</label>
        <input
          type="text"
          placeholder="Your name"
          id="name"
          name="name"
        ></input>
        <label for="password" id="password" name="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password"
        ></input>
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <p>
        Already have an account? Login <a href={"/"}>here.</a>
      </p>
    </>
  );
}
