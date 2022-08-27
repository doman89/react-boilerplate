import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tool = {
  id: number;
  name: string;
};

type ExampleState = {
  tools: Tool[];
};

const defaultState: ExampleState = {
  tools: [
    { id: 0, name: "TypeScript" },
    { id: 1, name: "React" },
    { id: 2, name: "React Router" },
    { id: 3, name: "Stylelint" },
    { id: 4, name: "Eslint" },
    { id: 5, name: "Redux" },
  ],
};

const slice = createSlice({
  name: "example",
  initialState: defaultState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<string>) => {
      const id = Date.now();

      state.tools.push({ id, name: payload });
    },
  },
});

export const { addTodo } = slice.actions;

export const { reducer: exampleReducer } = slice;
