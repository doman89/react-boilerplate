import { combineReducers } from "@reduxjs/toolkit";

import { exampleReducer } from "./toolsReducer";

export const reducer = combineReducers({
  example: exampleReducer,
});

export type RootState = ReturnType<typeof reducer>;
