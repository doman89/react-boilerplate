import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header';

export const App: React.FC = () => (
	<BrowserRouter >
		<Header />
		<Content />
	</BrowserRouter>
);
