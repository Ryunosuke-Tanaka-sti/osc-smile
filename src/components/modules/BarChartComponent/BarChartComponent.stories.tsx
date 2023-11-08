import { BarChartComponent } from './BarChartComponent';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'modules/BarChartComponent',
  component: BarChartComponent,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BarChartComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bamboo: 200,
    mushroom: 200,
    color: 'amber',
    category: 'キノコ',
  },
};
