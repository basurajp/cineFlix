import { configureStore } from "@reduxjs/toolkit";
import movieReduer from "./reducers/movieSlice";
import tvReducer from "./reducers/tvSlice";
import personReducer from "./reducers/personSlice";



export const store = configureStore({
  reducer: {
    movie: movieReduer,
    tv: tvReducer,
    person: personReducer,
  },
});
