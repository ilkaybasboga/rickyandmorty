import Pagination from "@mui/material/Pagination";
import "./CharPaginations.scss";
import { Box } from "@mui/material";


interface CharPaginationProps {
  pagination: { from: number, to: number },
  setPagination: React.Dispatch<React.SetStateAction<{ from: number, to: number ,count?:number}>>,
  characterFilter: any[] // change "any" to the appropriate type
}

const pageSize = 4;

const CharPaginations: React.FC<CharPaginationProps> = ({ pagination, setPagination, characterFilter }) => {
  
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box className="box-pagi">
      <Pagination
        count={Math.ceil(characterFilter.length / pageSize)}
        className="pagi"
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default CharPaginations;