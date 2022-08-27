import { Route, Routes } from "react-router-dom";
import { default as bemCssModules } from "bem-css-modules";

import { About } from "../About/About";
import { Hello } from "../Hello/Hello";

import { default as ContentStyles } from "./Content.module.scss";

const style = bemCssModules(ContentStyles);

export function Content() {
  return (
    <section className={style()}>
      <Routes>
        <Route element={<About />} path="/about" />
        <Route element={<Hello />} path="/" />
      </Routes>
    </section>
  );
}
