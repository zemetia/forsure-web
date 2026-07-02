import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import messages from '../../../../../messages/en/about.json';
import { AboutHero } from './AboutHero';

function renderWithIntl(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={{ about: messages }}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe('AboutHero', () => {
  it('renders eyebrow and headline', () => {
    renderWithIntl(<AboutHero />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders CTA link pointing to #our-team', () => {
    renderWithIntl(<AboutHero />);
    const cta = screen.getByRole('link', { name: /meet the team/i });
    expect(cta).toHaveAttribute('href', '#our-team');
  });

  it('has correct displayName', () => {
    expect(AboutHero.displayName).toBe('AboutHero');
  });
});
