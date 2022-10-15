// import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SingleRooms from "./pages/single-rooms";
import Error from "./pages/error";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRooms />} />
        <Route path="/*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
