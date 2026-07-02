import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import messages from '../../../../../messages/en/about.json';
import { OurTeam } from './OurTeam';

function renderWithIntl(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={{ about: messages }}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe('OurTeam', () => {
  it('renders section heading', () => {
    renderWithIntl(<OurTeam />);
    expect(screen.getByText('Our Team')).toBeInTheDocument();
  });

  it('renders team members from data', () => {
    renderWithIntl(<OurTeam />);
    expect(screen.getAllByText('CEO & Co-Founder')).toHaveLength(1);
    expect(screen.getByText('Creative Director')).toBeInTheDocument();
  });

  it('section has id for anchor scrolling', () => {
    const { container } = renderWithIntl(<OurTeam />);
    expect(container.querySelector('#our-team')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(OurTeam.displayName).toBe('OurTeam');
  });
});
