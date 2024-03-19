import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
interface Module {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons?: Lesson[];
}

interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
}

export interface KanbasState {
  modulesReducer: {
    modules: Module[];
    module: Module;
    show: boolean;
    collapsedModule : {};
  };
}

const store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default store;