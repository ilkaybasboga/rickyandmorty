import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import "./Main.scss";
import { Box } from "@mui/material";
import Paginations from "../pagination/Paginations";
import useCallData from "../../hooks/useCallData";
import { useSelector } from "react-redux";

const pageSize = 3;

interface Pagination {
  count?: number;
  from: number;
  to: number;
}

const Main: React.FC = () => {
  const [pagination, setPagination] = useState<Pagination>({
   
    from: 0,
    to: pageSize,
  });
  const { getData } = useCallData();

  const { location, loading } = useSelector((state: any) => state.get);

  const cardData = location.slice(pagination.from, pagination.to);

  useEffect(() => {
    getData("location");
  }, []);

  return (
    <Box className="box-main">
      <Cards data={cardData} />
      <Paginations pagination={pagination} setPagination={setPagination} />
    </Box>
  );
};

export default Main;