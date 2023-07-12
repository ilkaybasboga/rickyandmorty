import React, { useEffect, useState } from "react";
import CharCards from "../cards/CharCards";
import "./CharMain.scss";
import { Box } from "@mui/material";
import CharPaginations from "../pagination/CharPaginations";
import useCallData from "../../hooks/useCallData";
import { useSelector } from "react-redux";
import CharCardsFilter from "../cards/CharCardsFilter";
import { Character, RootState } from "../../types/types";

interface Pagination {
  count?: number;
  from: number;
  to: number;
}

const pageSize = 4;

const CharMain: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>({
   
    from: 0,
    to: pageSize,
  });
  const { getData } = useCallData();

  const { character, loading, filter, filterLoc, charDetails } = useSelector<
    RootState,
    RootState["get"]
  >((state) => state.get);


  const filterText: string = filter.payload;


  const filterLocation: string = filterLoc.payload;
  const characters: Character[] = character
    .filter((item: Character) => item.location.name === filterLocation)
    .map((x: Character) => x);

  const characterFilter: Character[] = characters
    .filter((item: Character) => item.status === filterText)
    .map((x: Character) => x);
  const characterFilters: Character[] = characterFilter.slice(
    pagination.from,
    pagination.to
  );
  const cardData: Character[] = characters.slice(pagination.from, pagination.to);
  console.log(filterLocation)

  useEffect(() => {
    getData("character");
  }, []);
  return (
    <Box className="box-main-char">
      {filterText ? (
        <CharCardsFilter characterFilters={characterFilters} />
      ) : (
        <CharCards data={cardData} />
      )}

      {filterText ? (
        <CharPaginations
          pagination={pagination}
          setPagination={setPagination}
          characterFilter={characterFilter}
        />
      ) : (
        <CharPaginations
          pagination={pagination}
          setPagination={setPagination}
          characterFilter={characters}
        />
      )}
    </Box>
  );
};

export default CharMain;
