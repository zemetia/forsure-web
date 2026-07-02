import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../../messages/en/about.json';
import { OurTeam } from './OurTeam';

const meta = {
  title: 'Sections/About/OurTeam',
  component: OurTeam,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={{ about: messages }}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof OurTeam>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
