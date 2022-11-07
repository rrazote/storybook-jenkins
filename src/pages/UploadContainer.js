import { CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import RecentUploadsGrid from '../components/uploads/RecentUploadsGrid';
import UploadPanel from '../components/uploads/UploadPanel';

function UploadContainer(props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
        }}>
            <CssBaseline />
            <UploadPanel title='Upload New Document(s)' />
            <RecentUploadsGrid title='Recent Uploads' />
        </Box>
    );
}

export default UploadContainer;