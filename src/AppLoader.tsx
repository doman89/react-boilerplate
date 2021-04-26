import ReactDOM from 'react-dom';

import { App } from './App';

export const render = (element: HTMLElement): void => {
  ReactDOM.render(<App />, element);
};
