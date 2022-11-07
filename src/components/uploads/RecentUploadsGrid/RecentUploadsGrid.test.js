import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
 
import * as stories from './RecentUploadsGrid.stories';

const { InitialLoadedGrid, ChangePage } = composeStories(stories);

test('loaded initial data', () => {
    const { container } = render(<InitialLoadedGrid />);
    expect(container.firstChild).toMatchSnapshot();
})