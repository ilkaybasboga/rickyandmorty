import Pagination from "@mui/material/Pagination";
import "./Paginations.scss";
import { Box } from "@mui/material";
import {  useSelector } from "react-redux";


interface PaginationProps {
  pagination: {
    from: number;
    to: number;
  };
  setPagination: React.Dispatch<React.SetStateAction<{
    from: number;
    to: number;
  }>>;
}

const pageSize = 3;

const Paginations: React.FC<PaginationProps> = ({ pagination, setPagination }) => {

  const { location } = useSelector((state: any) => state.get);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box className="box-pagi">
      <Pagination
        count={Math.ceil(location.length / pageSize)}
        className="pagi"
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default Paginations;