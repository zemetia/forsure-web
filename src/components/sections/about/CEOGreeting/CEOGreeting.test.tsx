import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import messages from '../../../../../messages/en/about.json';
import { CEOGreeting } from './CEOGreeting';

function renderWithIntl(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={{ about: messages }}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe('CEOGreeting', () => {
  it('renders eyebrow and quote', () => {
    renderWithIntl(<CEOGreeting />);
    expect(screen.getByText(/a message from our founder/i)).toBeInTheDocument();
    expect(screen.getByRole('blockquote')).toBeInTheDocument();
  });

  it('renders CEO name and role', () => {
    renderWithIntl(<CEOGreeting />);
    expect(screen.getByText('CEO & Co-Founder, Forsure Digitalindo')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(CEOGreeting.displayName).toBe('CEOGreeting');
  });
});
