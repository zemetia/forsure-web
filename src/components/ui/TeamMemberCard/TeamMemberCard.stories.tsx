import type { Meta, StoryObj } from '@storybook/react';

import { TeamMemberCard } from './TeamMemberCard';

const meta = {
  title: 'UI/TeamMemberCard',
  component: TeamMemberCard,
  parameters: { layout: 'padded' },
  args: {
    id: '1',
    name: 'Budi Santoso',
    role: 'CEO & Co-Founder',
    photo: '',
    social: {
      instagram: 'https://instagram.com/forsure.ids',
    },
  },
} satisfies Meta<typeof TeamMemberCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLinkedIn: Story = {
  args: {
    id: '2',
    name: 'Siti Rahayu',
    role: 'Creative Director',
    photo: '',
    social: {
      instagram: 'https://instagram.com/handle',
      linkedin: 'https://linkedin.com/in/handle',
    },
  },
};

export const NoSocial: Story = {
  args: {
    id: '3',
    name: 'Andi Kurniawan',
    role: 'Web Developer',
    photo: '',
    social: undefined,
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-6">
      {['CEO & Co-Founder', 'Creative Director', 'Web Developer', 'Photographer'].map(
        (role, i) => (
          <TeamMemberCard
            key={i}
            id={String(i + 1)}
            name={`Member ${i + 1}`}
            role={role}
            photo=""
            social={{ instagram: 'https://instagram.com/forsure.ids' }}
          />
        ),
      )}
    </div>
  ),
};
