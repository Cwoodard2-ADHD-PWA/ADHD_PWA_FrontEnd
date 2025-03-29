// import { useState } from "preact/hooks";
// import appLogo from "/favicon.svg";
import React from "preact/compat";
import { LocationProvider, Route, Router } from "preact-iso";
import Homepage from "./pages/home-page.tsx";
import ToDoList from "./pages/todo-list.tsx";
import register from "./pages/register.tsx";
import login from "./pages/login.tsx";
import WeeklyPlanner from "./pages/weekly-planner.tsx";
import MealPlanner from "./pages/meal-planner.tsx";
import Recipe from "./pages/recipe.tsx";
import Recipes from "./pages/recipes.tsx";
import GoalPlanner from "./pages/goal-planner.tsx";
import "./app.css";

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={login} />
        <Route path="/register" component={register} />
        <Route path="/dashboard" component={Homepage} />
        <Route path="/todo-list" component={ToDoList} />
        <Route path="/weekly-planner" component={WeeklyPlanner} />
        <Route path="/meal-planner" component={MealPlanner} />
        <Route path="/goal-planner" component={GoalPlanner} />
        <Route path="/recipes/:recipeID" component={Recipe} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/recipes" component={Recipes} />
      </Router>
    </LocationProvider>
  );
}
