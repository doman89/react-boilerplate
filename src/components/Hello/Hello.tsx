import { useSelector } from "react-redux";
import { default as bemCssModules } from "bem-css-modules";

import { default as HelloStyles } from "./Hello.module.scss";

import type { RootState } from "../../reducers/rootReducer";

const style = bemCssModules(HelloStyles);

export function Hello() {
  const tools = useSelector((state: RootState) => state.example.tools);

  return (
    <article>
      <p>
        This boilerplate is for developers who will create React App with basic configuration. The
        boilerplate contains support for:
      </p>
      <ul>
        {tools.map(tool => (
          <li className={style("element")} key={tool.name}>
            {tool.name}
          </li>
        ))}
      </ul>
    </article>
  );
}
