import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

import theme from './literal-sauce-drip/theme';
import "./asset/fonts/Font.css";

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}
	html {
		@media screen and (min-width: 1601px) {
			font-size: 1.013rem;
		}
	}

	body {
		margin: 0;
		padding: 0;
		
		width: 100%;
		height: 100%;

		color: #2b2835;
		background-color: #fff;
		font: inherit;
		font-weight: normal;
		line-height: inherit;
  	}

	#app {
		position: relative;
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

	h1, h2, h3, h4, h5, p {
		margin: 0;
		padding: 0;
		line-height: 1.15;
	}

	button {
		margin: 0;
		padding: 0;
		border: none;
		font-size: 100%;
		line-height: 1.15;
		cursor: pointer;
		text-transform: none;
	}
`;

ReactDOM.createRoot(document.getElementById('app')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		<GlobalStyle />
	</React.StrictMode>
);

