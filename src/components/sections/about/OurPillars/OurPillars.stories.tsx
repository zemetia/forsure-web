import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../../messages/en/about.json';
import { OurPillars } from './OurPillars';

const meta = {
  title: 'Sections/About/OurPillars',
  component: OurPillars,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={{ about: messages }}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof OurPillars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
