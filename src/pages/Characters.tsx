import React from 'react';
import NavbarChar from '../components/navbar/NavbarChar';
import FiltersBtn from '../components/buttons/FiltersBtn';
import "./Characters.scss";
import CharMain from '../components/main/CharMain';
import { Box } from '@mui/material';

const Characters: React.FC = () => {

  return (
    <Box className="box-char">
      <NavbarChar />
      <FiltersBtn/>
      <CharMain />
    </Box>
  );
}

export default Characters;