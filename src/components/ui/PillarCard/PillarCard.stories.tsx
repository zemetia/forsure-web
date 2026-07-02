import type { Meta, StoryObj } from '@storybook/react';
import { Palette, Target, Zap } from 'lucide-react';

import { PillarCard } from './PillarCard';

const meta = {
  title: 'UI/PillarCard',
  component: PillarCard,
  parameters: { layout: 'padded' },
  args: {
    icon: Palette,
    title: 'Creative',
    description: "Crafting visually compelling designs and content that capture attention and tell your brand's story.",
  },
} satisfies Meta<typeof PillarCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Creative: Story = {};

export const Strategy: Story = {
  args: {
    icon: Target,
    title: 'Strategy',
    description: 'Building meaningful digital presence with purpose — every decision aligned to your business goals.',
  },
};

export const Impact: Story = {
  args: {
    icon: Zap,
    title: 'Digital Impact',
    description: 'Delivering results that grow your brand and leave a lasting impression across every digital channel.',
  },
};

export const AllThree: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-px">
      <PillarCard
        icon={Palette}
        title="Creative"
        description="Crafting visually compelling designs and content that capture attention and tell your brand's story."
      />
      <PillarCard
        icon={Target}
        title="Strategy"
        description="Building meaningful digital presence with purpose — every decision aligned to your business goals."
      />
      <PillarCard
        icon={Zap}
        title="Digital Impact"
        description="Delivering results that grow your brand and leave a lasting impression across every digital channel."
      />
    </div>
  ),
};
