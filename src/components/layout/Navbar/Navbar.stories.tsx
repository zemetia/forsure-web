import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';

const meta = {
  title: 'Layout/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithContent: Story = {
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div className="h-[200vh] bg-background pt-32 text-center text-foreground-muted">
          Scroll down to see navbar transition
        </div>
      </div>
    ),
  ],
};
