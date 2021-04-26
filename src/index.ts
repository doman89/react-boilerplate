import { render } from './AppLoader';

const element: HTMLElement | null = document.getElementById('root-element');

if (element) {
  render(element);
}

export {};
