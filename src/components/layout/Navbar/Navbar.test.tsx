import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Navbar } from './Navbar';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock('@/i18n/navigation', () => ({
  Link: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
  usePathname: () => '/',
}));

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText('FORSURE')).toBeInTheDocument();
  });

  it('renders main navigation links', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(nav).toBeInTheDocument();
  });

  it('renders contact CTA link', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });
});
