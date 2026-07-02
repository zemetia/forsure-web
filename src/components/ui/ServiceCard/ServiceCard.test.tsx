import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ServiceCard } from './ServiceCard';

const defaultProps = {
  category: 'website' as const,
  title: 'Website Company Profile',
  subtitle: '5-Page Professional Website',
  features: ['Domain & hosting included', 'Mobile responsive', 'SEO setup'],
  ctaLabel: 'Inquire',
  ctaHref: '#',
};

describe('ServiceCard', () => {
  it('renders title and subtitle', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText('Website Company Profile')).toBeInTheDocument();
    expect(screen.getByText('5-Page Professional Website')).toBeInTheDocument();
  });

  it('renders all features', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText('Domain & hosting included')).toBeInTheDocument();
    expect(screen.getByText('Mobile responsive')).toBeInTheDocument();
    expect(screen.getByText('SEO setup')).toBeInTheDocument();
  });

  it('renders CTA link with correct href', () => {
    render(<ServiceCard {...defaultProps} ctaHref="https://wa.me/628970297969" />);
    const link = screen.getByRole('link', { name: 'Inquire' });
    expect(link).toHaveAttribute('href', 'https://wa.me/628970297969');
  });

  it('shows Popular badge on featured variant', () => {
    render(<ServiceCard {...defaultProps} variant="featured" />);
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });

  it('does not show Popular badge on default variant', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.queryByText('Popular')).not.toBeInTheDocument();
  });
});
