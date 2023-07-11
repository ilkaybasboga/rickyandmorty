import React from "react";
import CharDetMain from "../components/main/CharDetMain";
import NavbarChar from "../components/navbar/NavbarChar";
import { Box } from "@mui/material";
import "./CharactersDetails.scss";

const CharactersDetails: React.FC = () => {
  return (
    <Box className="box-char-det">
      <NavbarChar />
      <CharDetMain />
    </Box>
  );
};

export default CharactersDetails;