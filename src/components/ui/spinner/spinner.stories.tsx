import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from './spinner.component';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'muted'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    size: 'md',
    variant: 'destructive',
  },
};

export const Muted: Story = {
  args: {
    size: 'md',
    variant: 'muted',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'primary',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'primary',
  },
};
