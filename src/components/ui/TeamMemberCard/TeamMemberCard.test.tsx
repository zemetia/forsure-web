import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TeamMemberCard } from './TeamMemberCard';

const baseProps = {
  id: '1',
  name: 'Budi Santoso',
  role: 'CEO & Co-Founder',
  photo: '',
};

describe('TeamMemberCard', () => {
  it('renders name and role', () => {
    render(<TeamMemberCard {...baseProps} />);
    expect(screen.getByText('Budi Santoso')).toBeInTheDocument();
    expect(screen.getByText('CEO & Co-Founder')).toBeInTheDocument();
  });

  it('renders initials fallback when photo is empty', () => {
    render(<TeamMemberCard {...baseProps} name="Budi Santoso" photo="" />);
    expect(screen.getByText('BS')).toBeInTheDocument();
  });

  it('renders instagram link when provided', () => {
    render(
      <TeamMemberCard
        {...baseProps}
        social={{ instagram: 'https://instagram.com/test' }}
      />,
    );
    const link = screen.getByLabelText('Instagram Budi Santoso');
    expect(link).toHaveAttribute('href', 'https://instagram.com/test');
  });

  it('does not render social links when social is undefined', () => {
    render(<TeamMemberCard {...baseProps} social={undefined} />);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(TeamMemberCard.displayName).toBe('TeamMemberCard');
  });
});
