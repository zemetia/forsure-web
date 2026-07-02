import type { Meta, StoryObj } from '@storybook/nextjs';

import { ServiceCard } from './ServiceCard';

const meta = {
  title: 'UI/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'featured'] },
    category: { control: 'select', options: ['website', 'creative', 'photoshoot'] },
  },
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
  category: 'website' as const,
  title: 'Website Company Profile',
  subtitle: '5-Page Professional Website',
  features: [
    'Domain & hosting included (1 year)',
    '5 complete pages',
    'Mobile responsive design',
    'SEO Basic setup',
  ],
  ctaLabel: 'Inquire About Pricing',
  ctaHref: '#',
};

export const Default: Story = { args: { ...baseArgs } };

export const Featured: Story = {
  args: { ...baseArgs, variant: 'featured', title: 'Website E-Commerce' },
};

export const CreativeContent: Story = {
  args: {
    ...baseArgs,
    category: 'creative',
    title: 'Social Media Management',
    subtitle: '15 Posts / Month — Full Management',
    features: ['15 posts per month', 'Content planner', 'Monthly analytics'],
  },
};

export const Photoshoot: Story = {
  args: {
    ...baseArgs,
    category: 'photoshoot',
    title: 'Graduation Photoshoot',
    subtitle: 'Individual, Couple, or Family',
    features: ['All photos fully edited', 'Indoor & outdoor options', 'Multiple outfit changes'],
  },
};

export const Grid: Story = {
  args: { ...baseArgs },
  render: () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ServiceCard {...baseArgs} />
      <ServiceCard {...baseArgs} variant="featured" title="Website E-Commerce" />
      <ServiceCard {...baseArgs} category="creative" title="Instagram Ads" subtitle="Full Ad Management" />
    </div>
  ),
};
