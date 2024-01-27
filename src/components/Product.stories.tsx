import React from 'react';
import { StoryFn } from '@storybook/react';
import Products from './Products';
import { productProps } from './Product';

export default {
  component: Products,
  title: 'Product',
};

const Template: StoryFn<productProps> = () => <Products />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Products',
    state: 'List_PRINT',
    updatedAt: new Date(2024, 0, 1, 9, 0),
  },
}