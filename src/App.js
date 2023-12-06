import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
		</Routes>
	);
}