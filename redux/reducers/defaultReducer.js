import { createSlice } from "@reduxjs/toolkit";
import { godsName } from "../../utils";

const initialState = {
  favourites: [],
  godsNames: godsName,
  aarty: [],
};

const counterSlice = createSlice({
  name: "default",
  initialState,
  reducers: {
    addAarty: (state, action) => {
      const { aarti } = action.payload;
      console.log("============== ACTION ========", action.payload);
      state.aarty = aarti;
    },
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

export const { addFav, removeFav, addAarty } = counterSlice.actions;
export default counterSlice.reducer;
