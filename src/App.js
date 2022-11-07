import { ThemeProvider } from '@mui/material';
import React from 'react';
import UploadContainer from './pages/UploadContainer';
import { CustomTheme } from './assets/theme/Theme';
 

function App() {
	return (
		<ThemeProvider theme={CustomTheme}>
			<UploadContainer />
		</ThemeProvider>
	);
}

export default App;
