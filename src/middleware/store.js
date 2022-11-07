import { combineReducers, configureStore } from '@reduxjs/toolkit';
import FileReducer from './file/FileSlice';
import DocumentReducer from './document/DocumentSlice';




export const store = configureStore({
	reducer: {
		data: combineReducers({
			file: FileReducer,
			document: DocumentReducer
		}),
		// component: combineReducers({ 
		// }),
	}
});
