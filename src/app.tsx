// import { useState } from "preact/hooks";
// import preactLogo from "./assets/preact.svg";
// import appLogo from "/favicon.svg";
import { LocationProvider, Route, Router } from "preact-iso";
import Homepage from "./pages/home-page.tsx";
import ToDoList from "./pages/todo-list.tsx";
import register from "./pages/register.tsx";
import login from "./pages/login.tsx";
import "./app.css";

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={login} />
        <Route path="/register" component={register} />
        <Route path="/dashboard" component={Homepage} />
        <Route path="/todo-list" component={ToDoList} />
      </Router>
    </LocationProvider>
  );
}
