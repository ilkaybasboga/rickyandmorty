import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface State {
  location: any[];
  character: any[];
  pagination: any[];
  charDetails: any[];
  filter: string;
  filterLoc: string;
  loading: boolean;
  error: boolean;
}

const initialState: State = {
  location: [],
  character: [],
  pagination: [],
  charDetails: [],
  filter: "",
  filterLoc: "",
  loading: false,
  error: false
};

const getSlice = createSlice({
  name: "get",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, action: PayloadAction<{ allData: any, url: string }>) => {
      state.loading = false;
      state[action.payload.url] = action.payload.allData;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    postPagination: (state, action: PayloadAction<any>) => {
      state.pagination = action.payload;
    },
    getfilter: (state, action: PayloadAction<any>) => {
      state.filter = action.payload;
    },
    getLocfilter: (state, action: PayloadAction<any>) => {
      state.filterLoc = action.payload;
    },
    getCharDetails: (state, action: PayloadAction<any>) => {
      state.charDetails = action.payload;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail, postPagination, getfilter, getLocfilter, getCharDetails } =
  getSlice.actions;

export default getSlice.reducer;