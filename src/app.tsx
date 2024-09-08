// import { useState } from "preact/hooks";
// import preactLogo from "./assets/preact.svg";
// import appLogo from "/favicon.svg";
import { LocationProvider, Route, Router } from "preact-iso";
import Homepage from "./pages/home-page.tsx";
import ToDoList from "./pages/todo-list.tsx";
import "./app.css";

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Homepage} />
        <Route path="/todo-list" component={ToDoList} />
      </Router>
    </LocationProvider>
  );
}
