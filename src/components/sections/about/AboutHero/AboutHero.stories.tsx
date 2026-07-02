import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../../messages/en/about.json';
import { AboutHero } from './AboutHero';

const meta = {
  title: 'Sections/About/AboutHero',
  component: AboutHero,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={{ about: messages }}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof AboutHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
