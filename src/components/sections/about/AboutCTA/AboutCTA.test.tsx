import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import messages from '../../../../../messages/en/about.json';
import { AboutCTA } from './AboutCTA';

function renderWithIntl(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={{ about: messages }}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe('AboutCTA', () => {
  it('renders headline and subheadline', () => {
    renderWithIntl(<AboutCTA />);
    expect(screen.getByText(/interested in working together/i)).toBeInTheDocument();
  });

  it('renders contact and services links', () => {
    renderWithIntl(<AboutCTA />);
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view services/i })).toBeInTheDocument();
  });

  it('contact link opens whatsapp', () => {
    renderWithIntl(<AboutCTA />);
    const link = screen.getByRole('link', { name: /contact us/i });
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me'));
  });

  it('has correct displayName', () => {
    expect(AboutCTA.displayName).toBe('AboutCTA');
  });
});
