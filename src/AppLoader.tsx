import { createRoot } from "react-dom/client";

import { App } from "./App";

export const render = (element: HTMLElement) => {
  const root = createRoot(element);

  root.render(<App />);
};
