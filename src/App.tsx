import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { default as bemCssModules } from "bem-css-modules";

import { Content } from "./components/Content/Content";
import { Header } from "./components/Header/Header";

import { store } from "./stores/store";

import "./App.css";

bemCssModules.setSettings({
  modifierDelimiter: "--",
  throwOnError: true,
});

export const App = () => (
  <Provider store={store}>
    <div className="app">
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </div>
  </Provider>
);
