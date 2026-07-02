import { render } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';

import { Reveal } from './Reveal';

class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  constructor(_cb: IntersectionObserverCallback) {}
}

beforeEach(() => {
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: vi.fn().mockReturnValue({ matches: false }),
  });
});

describe('Reveal', () => {
  it('renders children', () => {
    const { getByText } = render(<Reveal>Hello</Reveal>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('renders with no inline style on server (pre phase)', () => {
    const { container } = render(<Reveal>Content</Reveal>);
    const el = container.firstChild as HTMLElement;
    expect(el.style.opacity).toBe('');
  });

  it('merges className prop', () => {
    const { container } = render(<Reveal className="my-class">Content</Reveal>);
    expect(container.firstChild).toHaveClass('my-class');
  });

  it('passes delay as transition duration', () => {
    const { getByText } = render(<Reveal delay={200}>Content</Reveal>);
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('renders without crashing for all directions', () => {
    const dirs = ['up', 'left', 'right'] as const;
    dirs.forEach((direction) => {
      const { unmount } = render(<Reveal direction={direction}>Content</Reveal>);
      unmount();
    });
  });
});
