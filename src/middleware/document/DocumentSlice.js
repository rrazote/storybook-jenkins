import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Service from '../../services/Upload';
import Common_Functions from '../common/CommonFunctions';

const initial_state = {
    data: {
        documents: Common_Functions.set_initial_object()
    }
};

// export const get_upload_documents = createAsyncThunk(
//     'document/get_upload_documents',
//     async (params) => {
//         const res = await Service.get_upload_documents(params);
//         return res.data;
//     }
// );

const document_slice = createSlice({
    name: 'document',
    initialState: initial_state,
    // extraReducers: {
    //     [get_upload_documents.fulfilled]: (state, action) => {
    //         // standard state.data / state.component
    //         Common_Functions.normalize_state(action.payload.data.document, state.data.documents, 'version_id');
    //         state.data.total_document_count = action.payload.data.total;
    //         state.component.upload_ids = action.payload.data.document.map((item) => item.version_id);
    //     },
    //     // [get_upload_documents.pending]: (state) => { 
    //     //     state.component.loading_data = true;
    //     // },
    //     // [get_upload_documents.rejected]: (state) => { 
    //     //     state.component.loading_data = false;
    //     // }
    // }
});

export default document_slice.reducer;