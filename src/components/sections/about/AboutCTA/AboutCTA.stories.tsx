import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../../messages/en/about.json';
import { AboutCTA } from './AboutCTA';

const meta = {
  title: 'Sections/About/AboutCTA',
  component: AboutCTA,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={{ about: messages }}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof AboutCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
