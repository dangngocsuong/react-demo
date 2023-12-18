import { ThemeProvider } from 'styled-components';
//import './App.css'
import Router from 'router/Router';
import GlobalStyle from 'styles/global';
import { useState } from 'react';
import './i18n';

function App() {
	const [theme, setTheme] = useState('light');
	const contextValue: App.Theme = {
		theme,
		setTheme
	}

	return (		
		<ThemeProvider theme={contextValue}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	)
}

export default App