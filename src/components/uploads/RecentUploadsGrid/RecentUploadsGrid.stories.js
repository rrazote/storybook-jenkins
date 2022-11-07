import { Box } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../middleware/store';
import RecentUploadsGrid from '../RecentUploadsGrid';
import { within, userEvent } from '@storybook/testing-library';

export default {
    title: 'Component/RecentUploadsGrid',
    component: RecentUploadsGrid
};

const Template = (args) => <Provider store={store}>
    <Box sx={{
        display: 'flex',
        height: '90vh'
    }}>
        <RecentUploadsGrid {...args} />
    </Box>
</Provider>;

export const InitialLoadedGrid = Template.bind({});

export const ChangePage = Template.bind({});

ChangePage.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);  
    const nextPageButton = await canvas.getByTestId('KeyboardArrowRightIcon'); 
    await userEvent.click(nextPageButton); 
    
};