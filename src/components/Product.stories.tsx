import React from 'react';
import { StoryFn } from '@storybook/react';
import Product, { productProps } from './Products';

export default {
  component: Product,
  title: 'Product',
};

const Template: StoryFn<productProps> = () => <Product />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2024, 0, 1, 9, 0),
  },
}