import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Service from '../../services/Upload';
import Common_Functions from '../common/CommonFunctions';

const initial_state = Common_Functions.set_initial_object();
initial_state.total_file_count = 0;

export const get_upload_files = createAsyncThunk(
    'file/get_upload_files',
    async (params) => {
        const res = await Service.get_upload_files(params);
        return res.data;
    }
);

const file_slice = createSlice({
    name: 'file',
    initialState: initial_state,
    extraReducers: {
        [get_upload_files.fulfilled]: (state, action) => {
            Common_Functions.normalize_state(action.payload.data.file, state, 'version_id');
            state.total_file_count = action.payload.data.total;
        },
        // [get_upload_files.pending]: (state) => { 
        //     state.component.loading_data = true;
        // },
        // [get_upload_files.rejected]: (state) => { 
        //     state.component.loading_data = false;
        // }
    }
});

export default file_slice.reducer;