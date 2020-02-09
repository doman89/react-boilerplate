import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { About } from '../About/About';
import { Hello } from '../Hello/Hello';
import { default as ContentStyles } from './Content.module.scss';

const style = bemCssModules(ContentStyles);

export const Content: React.FC = () => (
	<section className={style()}>
		<Switch>
			<Route path="/about" component={About} />
			<Route path="/" component={Hello} />
		</Switch>
	</section>
);
