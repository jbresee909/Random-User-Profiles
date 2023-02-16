import React, { useState } from "react"
import './App.css';
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [selectedUser, setSelectedUser] = useState({})

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setSelectedUser={setSelectedUser} />
    },
    {
      path: "/profile",
      element: <Profile user={selectedUser} />
    },
    {
      path: "*",
      element: <Home />
    }
  ]);

  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
