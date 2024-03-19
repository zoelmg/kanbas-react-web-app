import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";



const initialState = {
  modules: [...db.modules],
  module: { name: "New Module", description: "New Description"},
  show : false,
};



const modulesSlice = createSlice({
  name: "modules",
  initialState,
  
  reducers: {
    addModule: (state, action) => {
      const moduleExists = state.modules.find((mod) => action.payload._id === mod._id);
      if (moduleExists) {
        return;
      }
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.modules,
      ];

      state.show = !state.show
      state.module = { name: "New Module", description: "New Description"}
    },

    deleteModule: (state, action) => {
      state.modules = state.modules.filter((mod) => mod._id !== action.payload._id
      );
    },

    updateModule: (state, action) => {
        const updatedModuleIndex = state.modules.findIndex((mod) => mod._id === action.payload._id);
        if (updatedModuleIndex !== -1) {
          state.modules[updatedModuleIndex] = action.payload;
        }

        state.show = !state.show
        state.module = { name: "New Module", description: "New Description"}
      },
    
      setModule: (state, action) => {
        state.module = action.payload;
      },

      setShow: (state, action) => {
        state.show = action.payload
      },
    },
});


export const { addModule, deleteModule, updateModule, setModule, setShow } = modulesSlice.actions;
export default modulesSlice.reducer;