import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../../messages/en/about.json';
import { OurStory } from './OurStory';

const meta = {
  title: 'Sections/About/OurStory',
  component: OurStory,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={{ about: messages }}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof OurStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
