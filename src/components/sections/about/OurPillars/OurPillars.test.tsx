import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import messages from '../../../../../messages/en/about.json';
import { OurPillars } from './OurPillars';

function renderWithIntl(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={{ about: messages }}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe('OurPillars', () => {
  it('renders all three pillar titles', () => {
    renderWithIntl(<OurPillars />);
    expect(screen.getByText('Creative')).toBeInTheDocument();
    expect(screen.getByText('Strategy')).toBeInTheDocument();
    expect(screen.getByText('Digital Impact')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(OurPillars.displayName).toBe('OurPillars');
  });
});
