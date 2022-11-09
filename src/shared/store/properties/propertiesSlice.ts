import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AgeFilter, PropertiesInitialState, Property, Status } from "./types";

export const fetchProperties = createAsyncThunk(
  "fetchProperties",
  async (query?: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${query ? `?query=${query}` : ""}`
    );
    const parsedResponse = await response.json();

    return parsedResponse.results as Property[];
  }
);

const propertiesInitialState: PropertiesInitialState = {
  properties: [],
  isFetchingProperties: false,
  error: null,
  filters: {
    status: null,
    ageFilter: "newest",
  },
  inputValue: "",
};

const propertiesSlice = createSlice({
  name: "properties",
  initialState: propertiesInitialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.filters.status = action.payload;
    },
    setAgeFilter: (state, action: PayloadAction<AgeFilter>) => {
      state.filters.ageFilter = action.payload;
    },
    sortByStatus: (state, action: PayloadAction<Status>) => {
      state.properties.sort((a, b) => {
        if (a.status === action.payload && b.status !== action.payload) {
          return -1;
        }
        if (a.status !== action.payload && b.status === action.payload) {
          return 1;
        }
        return 0;
      });
    },
    sortByPropertyAge: (state, action: PayloadAction<AgeFilter>) => {
      state.properties.sort((a, b) => {
        if (action.payload === "newest") {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProperties.pending, (state) => {
      state.isFetchingProperties = true;
    });
    builder.addCase(fetchProperties.fulfilled, (state, { payload }) => {
      state.properties = payload;
      if (state.filters.status) {
        sortByStatus(state.filters.status);
      }
      if (state.filters.ageFilter) {
        sortByPropertyAge(state.filters.ageFilter);
      }
      state.isFetchingProperties = false;
    });
    builder.addCase(fetchProperties.rejected, (state, { payload }) => {
      state.isFetchingProperties = false;
      if (payload) state.error = "Something went wrong! Try again";
    });
  },
});

export const {
  sortByStatus,
  sortByPropertyAge,
  setStatus,
  setAgeFilter,
  setInputValue,
} = propertiesSlice.actions;

export default propertiesSlice.reducer;
