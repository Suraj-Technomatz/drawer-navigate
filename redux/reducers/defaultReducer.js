import { createSlice } from "@reduxjs/toolkit";
import { godsName } from "../../utils";

const initialState = {
  favourites: [],
  godsNames: godsName,
};

const counterSlice = createSlice({
  name: "default",
  initialState,
  reducers: {
    addFav: (state, action) => {
      const { id } = action.payload;
      const record = state.godsNames.find((godsName) => godsName.id === id);
      const updatedFavs = [...state.favourites];
      updatedFavs.push(record);
      state.favourites = updatedFavs;
    },
    removeFav: (state, action) => {
      const { id } = action.payload;
      let records = [];
      state.favourites.map((godsName) => {
        if (godsName.id !== id) {
          records.push(godsName);
        }
      });
      console.log("========== RECORDS =========", records);
      state.favourites = records;
    },
  },
});

export const { addFav, removeFav } = counterSlice.actions;
export default counterSlice.reducer;
