import { useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import appLogo from '/favicon.svg';
import ToDoList from './pages/ToDoList.tsx';
import PWABadge from './PWABadge.tsx';
import './app.css';

export function App() {

  return (
    <>
      <ToDoList />
      <PWABadge />
    </>
  )
}
