import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, getSuccess, fetchStart, getfilter, getLocfilter, getCharDetails } from "../features/getSlice";
import { useNavigate } from "react-router-dom";

const useCallData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async (url: string) => {
    const BASE_URL = "https://rickandmortyapi.com/api";

    try {
      const { data } = await axios(`${BASE_URL}/${url}/`);
      const pageCount = data.info.pages;
      // console.log(pageCount)
      let allData: any[] = [];
      for (let i = 1; i <= pageCount; i++) {
        const response = await axios.get(`${BASE_URL}/${url}?page=${i}`);
        const firstData = response.data.results;
        allData = allData.concat(firstData);
      const status = response.status
      dispatch(fetchStart(status));

      }

      dispatch(getSuccess({ allData, url }));
      // console.log(allData)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const handleCardFilter = (e: any) => {
    // console.log(e)
    const filter = e;
    dispatch(getfilter(filter));
    // dispatch(getfilter(""));
  };

  const handleLocationFilter = (e: any) => {
    // console.log(e)
    const filterLoc = e;
    dispatch(getLocfilter(filterLoc));
    navigate("/characters");
  };

  const handleCharDetails = (e: any) => {
    // console.log(e)
    const charDetails = e;
    dispatch(getCharDetails(charDetails));
    navigate("/CharactersDetails");
  };

  return {
    getData,
    handleCardFilter,
    handleLocationFilter,
    handleCharDetails,
  };
};

export default useCallData;