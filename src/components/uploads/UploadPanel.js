import { Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BrowseFilesIcon from '@mui/icons-material/FindInPage';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    {
        field: 'file_name',
        headerName: 'File Name',
        flex: 1
    },
    {
        field: 'size',
        headerName: 'Size',
        flex: 1
    },
    {
        field: 'progress',
        headerName: 'Progress',
        flex: 1
    }
]

const NoRowsOverlay = () => {
    return (
        <Stack
            height="100%"
            alignItems="center"
            justifyContent="center"
            sx={{
                color: 'gray',
                fontSize: '11px'
            }}
        >
            <div>Click <b>BROWSE</b> to add more files.</div>
        </Stack>
    );
}

function UploadPanel(props) {
    const [uploaded_files, set_uploaded_files] = useState({});
    const [rows, set_rows] = useState([]);
    const [page_size, set_page_size] = useState(100);

    const on_input_file_change = (e) => {
        e.preventDefault();
        if (!e.target.files) {
            return;
        }

        let file_obj = {...uploaded_files};

        for ( const file of [...e.target.files] ) {
            file_obj[file.name] = file; 
        } 
        let files = Object.values(file_obj)
            .map((item, index) => {
                return ({
                    id: index,
                    file_name: item.name,
                    size: item.size,
                    progress: 'Ready'
                })
            });

        set_uploaded_files(file_obj); 
        set_rows(files);
        set_page_size(files.length);
    }

    const on_click_clear_uploads = () => {
        set_uploaded_files({});
        set_rows([]);
    }

    return (
        <Box
            sx={{
                display: 'flex', flexDirection: 'column', margin: '5px', flexGrow: 1
            }}
        >
            <Typography variant='ad_reas_title_bar'>
                {props.title}
            </Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                rowsPerPageOptions={[page_size]}
                loading={false}
                className='ad-reas-grid ad-reas-grid-footer-hide'
                rowHeight={35}
                headerHeight={40}
                pageSize={page_size}
                components={{ NoRowsOverlay }}
            />
            <Toolbar
                variant="ad_reas_primary"
                sx={{
                    justifyContent: "space-between"
                }}>
                <div>
                    <Button
                        variant="ad_reas_primary"
                        component="label"
                        startIcon={<BrowseFilesIcon />}
                        sx={{
                            marginRight: '5px'
                        }}
                    >
                        Browse...
                        <input
                            hidden
                            accept="application/pdf,application/msword"
                            multiple type="file"
                            onChange={on_input_file_change}
                        />
                    </Button>
                    <Button
                        variant="ad_reas_primary"
                        component="label"
                        startIcon={<ClearAllIcon />}
                        onClick={on_click_clear_uploads}
                    >
                        Clear Uploads
                    </Button>
                </div>
                <div />
                <Button
                    variant="ad_reas_primary"
                    component="label"
                    startIcon={<FileUploadIcon />}
                >
                    Upload
                </Button>
            </Toolbar>
        </Box>
    );
}

export default UploadPanel;