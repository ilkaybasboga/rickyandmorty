import React from "react";
import "./CharDetMain.scss";
import { Box } from "@mui/material";
import CharCardsDet from "../cards/CharCardsDet";
import CharRightCards from "../cards/CharRightCards";
import { useSelector } from "react-redux";
import { RootState } from "../../types/types";
import SkeletonCharDet from "../skeleton/SkeletonCharDet";

const CharDetMain: React.FC = () => {
  const { charDetails, filterLoc, character,status } = useSelector<
    RootState,
    RootState["get"]
  >((state) => state.get);

  const charDet = charDetails;

  const filterLocation = filterLoc.payload;
  const characters = character
    .filter((item) => item.location.name === filterLocation)
    .map((x) => x)
    .slice(0, 6);

  return (
    <Box className="box-main-det">
      {!(status===200) && <SkeletonCharDet/>}
      <CharCardsDet data={charDet} />
      <CharRightCards data={characters} />
    </Box>
  );
};

export default CharDetMain;
