import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../../messages/en/about.json';
import { CEOGreeting } from './CEOGreeting';

const meta = {
  title: 'Sections/About/CEOGreeting',
  component: CEOGreeting,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={{ about: messages }}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof CEOGreeting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
