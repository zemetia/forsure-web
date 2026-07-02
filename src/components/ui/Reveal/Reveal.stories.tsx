import type { Meta, StoryObj } from '@storybook/nextjs';

import { Reveal } from './Reveal';

const meta = {
  title: 'UI/Reveal',
  component: Reveal,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    direction: { control: 'select', options: ['up', 'left', 'right'] },
    delay: { control: { type: 'range', min: 0, max: 600, step: 50 } },
  },
} satisfies Meta<typeof Reveal>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = () => (
  <div className="rounded-xl border border-border bg-surface p-8 text-center font-sans text-foreground">
    Scroll to reveal
  </div>
);

export const Default: Story = {
  args: { direction: 'up', delay: 0, children: <Box /> },
};

export const FromLeft: Story = {
  args: { direction: 'left', delay: 0, children: <Box /> },
};

export const FromRight: Story = {
  args: { direction: 'right', delay: 0, children: <Box /> },
};

export const WithDelay: Story = {
  args: { direction: 'up', delay: 200, children: <Box /> },
};

export const Stagger: Story = {
  args: { children: null },
  render: () => (
    <div className="flex flex-col gap-4">
      {[0, 120, 240].map((delay) => (
        <Reveal key={delay} delay={delay}>
          <Box />
        </Reveal>
      ))}
    </div>
  ),
};
