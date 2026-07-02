import { render, screen } from '@testing-library/react';
import { Palette } from 'lucide-react';
import { describe, expect, it } from 'vitest';

import { PillarCard } from './PillarCard';

describe('PillarCard', () => {
  it('renders title and description', () => {
    render(
      <PillarCard
        icon={Palette}
        title="Creative"
        description="Crafting visually compelling designs."
      />,
    );
    expect(screen.getByText('Creative')).toBeInTheDocument();
    expect(screen.getByText('Crafting visually compelling designs.')).toBeInTheDocument();
  });

  it('renders icon with aria-hidden', () => {
    const { container } = render(
      <PillarCard icon={Palette} title="Creative" description="Description" />,
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies custom className', () => {
    const { container } = render(
      <PillarCard icon={Palette} title="Creative" description="Description" className="test-class" />,
    );
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('has correct displayName', () => {
    expect(PillarCard.displayName).toBe('PillarCard');
  });
});
