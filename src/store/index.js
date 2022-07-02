import { configureStore } from "@reduxjs/toolkit";
import { countStudio } from "../store/reducer/counter"

export default configureStore({
  reducer: {
    studio: countStudio
  }
})



