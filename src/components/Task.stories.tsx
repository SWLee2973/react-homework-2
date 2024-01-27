import React from 'react';
import { StoryFn } from '@storybook/react';
import Task, { taskProps } from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template: StoryFn<taskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2024, 0, 1, 9, 0),
  },
}

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};