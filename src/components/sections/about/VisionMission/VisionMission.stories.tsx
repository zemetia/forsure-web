import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '../../../../../messages/en/about.json';
import { VisionMission } from './VisionMission';

const meta = {
  title: 'Sections/About/VisionMission',
  component: VisionMission,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en" messages={{ about: messages }}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof VisionMission>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
