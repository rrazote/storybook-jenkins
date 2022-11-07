import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_upload_files } from '../../middleware/file/FileSlice';

const columns = [
    {
        field: 'file_name',
        headerName: 'File Name',
        flex: 1
    },
    {
        field: 'author_name',
        headerName: 'Author Name',
        flex: 1
    },
    {
        field: 'status',
        headerName: 'Status',
        flex: 1
    }
];

const params = {
    live: true,
    products: 'store.document',
    $skip: 0,
    page: 1,
    $limit: 25,
    $sort: '{ "committed_time": -1 }'
}

export default function RecentUploadsGrid(props) {
    const { file } = useSelector(state => state.data);
    const [rows, set_rows] = useState([]);
    const [page_row_ids, set_page_row_ids] = useState([]);
    const [page, set_page] = useState(0);
    const [page_size, set_page_size_change] = useState(params.$limit);
    const [upload_params, set_upload_params] = useState(params);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const on_page_change = (new_page) => {
        set_page(new_page);
        set_upload_params({
            ...upload_params,
            $skip: new_page * page_size,
            page: new_page + 1,
            $limit: page_size
        });
    }

    const on_page_size_change = (new_page_size, details) => {
        set_page_size_change(new_page_size);
        // for changing page size if $skip is larger than total total_file_count
        // do not run below set_upload_params since data grid will call onPageChange function
        let skip = page * new_page_size;
        if (skip > file.total_file_count) {
            return;
        }

        set_upload_params({
            ...params,
            $skip: skip,
            $limit: new_page_size,
        });
    }

    useEffect(() => {
        dispatch(get_upload_files(upload_params))
            .then((res) => {
                let data = res.payload.data.file.map(item => item.version_id);
                set_page_row_ids(data);
            });
        setLoading(true);
    }, [upload_params])

    useEffect(() => {
        let upload_files = page_row_ids.map((item) => file.by_id[item]);
        set_rows(Object.values(upload_files));
        setLoading(false);
    }, [page_row_ids]);

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', margin: '5px', flexGrow: 1
        }}>
            <Typography variant='ad_reas_title_bar'>
                {props.title}
            </Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                rowCount={file.total_file_count}
                paginationMode='server'
                pageSize={page_size}
                onPageChange={on_page_change}
                page={page}
                onPageSizeChange={on_page_size_change}
                rowsPerPageOptions={[25, 50, 100]}
                loading={loading}
                className='ad-reas-grid'
                rowHeight={35}
                headerHeight={40}
                {...props}
            />
        </Box>

    );
}