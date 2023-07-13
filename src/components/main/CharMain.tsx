import React, { useEffect, useState } from "react";
import CharCards from "../cards/CharCards";
import "./CharMain.scss";
import { Box } from "@mui/material";
import CharPaginations from "../pagination/CharPaginations";
import useCallData from "../../hooks/useCallData";
import { useSelector } from "react-redux";
import CharCardsFilter from "../cards/CharCardsFilter";
import { Character, Pagination, RootState } from "../../types/types";
import SkeletonChar from "../skeleton/SkeletonChar";

const pageSize = 4;

const CharMain: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>({
    from: 0,
    to: pageSize,
  });
  const { getData } = useCallData();

  const { character, filter, filterLoc,status } = useSelector<
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
  const cardData: Character[] = characters.slice(
    pagination.from,
    pagination.to
  );
 

  useEffect(() => {
    getData("character");
  }, []);
  return (
    <Box className="box-main-char">
      {!(status===200) && <SkeletonChar/>}
      {filterText ? (
        <CharCardsFilter characterFilters={characterFilters} /> //** Filtrelemeye göre Component seçiyoruz */
      ) : (
        <CharCards data={cardData} />
      )}

      {filterText ? (
        <CharPaginations
          pagination={pagination}
          setPagination={setPagination}
          characterFilter={characterFilter}     //** Pagination değişkenine göre Component seçiyoruz */
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
