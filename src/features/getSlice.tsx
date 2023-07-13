import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface State {
  location: any[];
  character: any[];
  pagination: any[];
  charDetails: any[];
  filter: any;
  filterLoc: any;
  loading: boolean;
  error: boolean;
  status:any;
}

const initialState: State = {
  location: [],
  character: [],
  pagination: [],
  charDetails: [],
  filter:[],
  filterLoc: "",
  loading: false,
  error: false,
  status:0
};

const getSlice = createSlice({
  name: "get",
  initialState,
  reducers: {
    fetchStart: (state, action: PayloadAction<any>) => {
      state.status = action.payload;
      
    },
    // getSuccess: (state, action: PayloadAction<{ allData: any, url: string }>) => {
    //   state.loading = false;
    //   state[action.payload.url] = action.payload.allData;
    // },
    getSuccess: (
      state,
      action: PayloadAction<{ allData: any; url: string }>
    ) => {
      const { allData, url } = action.payload;
     
      
      if (url === "location") {
        state.location = allData;
      } else if (url === "character") {
        state.character = allData;
      } else if (url === "pagination") {
        state.pagination = allData;
      } else if (url === "charDetails") {
        state.charDetails = allData;
      }
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    postPagination: (state, action: PayloadAction<any>) => {
      state.pagination = action.payload;
    },
    getfilter: (state, action: PayloadAction<any>) => {
      state.filter = action;
    
    },
    getLocfilter: (state, action: PayloadAction<any>) => {
      state.filterLoc = action;
    },
    getCharDetails: (state, action: PayloadAction<any>) => {
      state.charDetails = action.payload;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail, postPagination, getfilter, getLocfilter, getCharDetails } =
  getSlice.actions;

export default getSlice.reducer;