import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import messages from '../../../../../messages/en/about.json';
import { VisionMission } from './VisionMission';

function renderWithIntl(ui: React.ReactElement) {
  return render(
    <NextIntlClientProvider locale="en" messages={{ about: messages }}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe('VisionMission', () => {
  it('renders vision and mission headings', () => {
    renderWithIntl(<VisionMission />);
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
  });

  it('renders all four mission items', () => {
    renderWithIntl(<VisionMission />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
  });

  it('has correct displayName', () => {
    expect(VisionMission.displayName).toBe('VisionMission');
  });
});
