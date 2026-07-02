import type { Meta, StoryObj } from '@storybook/nextjs';

import { PREWED_TIERS } from '@/data/services';
import { PricingTier } from './PricingTier';
import { PricingTierGroup } from './PricingTierGroup';

const meta = {
  title: 'UI/PricingTier',
  component: PricingTier,
  tags: ['autodocs'],
} satisfies Meta<typeof PricingTier>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bronze: Story = {
  args: {
    name: 'Bronze',
    tagline: 'Ideal for shorter sessions',
    features: [
      'Max 4 hours photoshoot session',
      '20 photos — all fully edited',
      '1 video edited (3–5 minutes)',
    ],
    ctaLabel: 'Inquire About Pricing',
    ctaHref: '#',
  },
};

export const Silver: Story = {
  args: {
    name: 'Silver',
    tagline: 'Ideal for longer, more detailed sessions',
    featured: true,
    features: [
      'Max 8 hours photoshoot session',
      '30 photos — all fully edited',
      '1 video edited (3–5 minutes)',
      'Free 1 video for Instagram Stories',
    ],
    ctaLabel: 'Inquire About Pricing',
    ctaHref: '#',
  },
};

export const Group: StoryObj<typeof PricingTierGroup> = {
  render: () => (
    <div className="grid grid-cols-1">
      <PricingTierGroup tiers={PREWED_TIERS} ctaLabel="Inquire About Pricing" ctaHref="#" />
    </div>
  ),
};
