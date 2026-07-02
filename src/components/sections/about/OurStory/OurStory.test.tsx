import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import messages from '../../../../../messages/en/about.json';
import { OurStory } from './OurStory';

function renderWithIntl(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={{ about: messages }}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe('OurStory', () => {
  it('renders headline and body text', () => {
    renderWithIntl(<OurStory />);
    expect(screen.getByText('Forsure Digitalindo')).toBeInTheDocument();
    expect(screen.getByText('Our Story')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(OurStory.displayName).toBe('OurStory');
  });
});
