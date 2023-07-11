import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Locations from "../pages/Locations";
import Characters from "../pages/Characters";
import CharactersDetails from "../pages/CharactersDetails";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Locations />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/CharactersDetails" element={<CharactersDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;