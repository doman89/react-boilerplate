import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About } from '../About/About';
import { Hello } from '../Hello/Hello';

export const Content: React.FC = () => (
	<section>
		<Switch>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/">
				<Hello />
			</Route>
		</Switch>
	</section>
);
