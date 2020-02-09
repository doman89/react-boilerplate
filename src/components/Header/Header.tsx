import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => (
	<nav>
		<ul>
			<li>
				<Link to="/">Hello</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
		</ul>
	</nav>
);