import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import "./fonts/Font.css"

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
		user-select: none;
		-ms-user-select: none;
		-moz-user-select: -moz-none;
		-webkit-user-select: none;
		-khtml-user-select: none;
  	}

	ul, ol, li {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	a {
		background-color: transparent;
		text-decoration: none;
	}
`;

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

