import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PREWED_TIERS } from '@/data/services';
import { PricingTier } from './PricingTier';
import { PricingTierGroup } from './PricingTierGroup';

const bronze = PREWED_TIERS[0];
const silver = PREWED_TIERS[1];

if (!bronze || !silver) throw new Error('PREWED_TIERS must have at least 2 entries');

describe('PricingTier', () => {
  it('renders tier name and tagline', () => {
    render(<PricingTier {...bronze} />);
    expect(screen.getByText('Bronze')).toBeInTheDocument();
    expect(screen.getByText('Ideal for shorter sessions')).toBeInTheDocument();
  });

  it('renders all features', () => {
    render(<PricingTier {...bronze} />);
    expect(screen.getByText('Max 4 hours photoshoot session')).toBeInTheDocument();
  });

  it('shows Recommended badge when featured', () => {
    render(<PricingTier {...silver} />);
    expect(screen.getByText('Recommended')).toBeInTheDocument();
  });

  it('does not show Recommended badge when not featured', () => {
    render(<PricingTier {...bronze} />);
    expect(screen.queryByText('Recommended')).not.toBeInTheDocument();
  });
});

describe('PricingTierGroup', () => {
  it('renders all three tiers', () => {
    render(<PricingTierGroup tiers={PREWED_TIERS} />);
    expect(screen.getByText('Bronze')).toBeInTheDocument();
    expect(screen.getByText('Silver')).toBeInTheDocument();
    expect(screen.getByText('Gold')).toBeInTheDocument();
  });
});
