import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HelloStyles } from './Hello.module.scss';

const style = bemCssModules(HelloStyles);

export const Hello: React.FC = () => (
	<article>
		<p>This boilerplate is for developers who will create React App with basic configuration. The boilerplate contain support for:</p>
		<ul>
			<li className={style('element')}>TypeScript</li>
			<li className={style('element')}>React</li>
			<li className={style('element')}>React Router</li>
		</ul>
	</article>
);
