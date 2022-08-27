import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "../reducers/rootReducer";

export const store = configureStore({ reducer });
