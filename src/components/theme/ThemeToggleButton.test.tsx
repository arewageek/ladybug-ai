import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeToggleButton } from './ThemeToggleButton'; // Adjust path as necessary

describe('ThemeToggleButton', () => {
  let mockMatchMedia: jest.Mock;
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    // Clear localStorage
    localStorage.clear();

    // Store original matchMedia and mock it
    originalMatchMedia = window.matchMedia;
    mockMatchMedia = jest.fn();
    window.matchMedia = mockMatchMedia;

    // Mock localStorage.setItem
    jest.spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    // Restore original matchMedia and clear mocks
    window.matchMedia = originalMatchMedia;
    jest.restoreAllMocks();
  });

  // Helper to check for icon presence (very basic, relies on aria-label and assumes icons are visually distinct)
  // A more robust way would be to add test-ids to SVGs or check SVG paths.
  const expectSunIcon = () => {
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  };

  const expectMoonIcon = () => {
    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument();
  };
  
  test('renders sun icon by default (light mode, no localStorage, no system pref)', () => {
    mockMatchMedia.mockImplementation(query => ({
      matches: false, // System prefers light
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    render(<ThemeToggleButton />);
    expectSunIcon();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  test('renders moon icon if system preference is dark (no localStorage)', () => {
    mockMatchMedia.mockImplementation(query => ({
      matches: true, // System prefers dark
      media: query,
      onchange: null,
      addListener: jest.fn(), 
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    render(<ThemeToggleButton />);
    expectMoonIcon();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('renders sun icon if localStorage is light', () => {
    localStorage.setItem('theme', 'light');
    mockMatchMedia.mockImplementation(query => ({ // System preference shouldn't matter here
      matches: true, 
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    render(<ThemeToggleButton />);
    expectSunIcon();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  test('renders moon icon if localStorage is dark', () => {
    localStorage.setItem('theme', 'dark');
     mockMatchMedia.mockImplementation(query => ({ // System preference shouldn't matter here
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    render(<ThemeToggleButton />);
    expectMoonIcon();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('toggles theme on click, updates localStorage, and changes icon', () => {
    mockMatchMedia.mockImplementation(query => ({
      matches: false, // Start with light mode
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    render(<ThemeToggleButton />);
    
    // Initial: Light mode
    expectSunIcon();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    const button = screen.getByRole('button');

    // First click: -> Dark mode
    act(() => {
      fireEvent.click(button);
    });
    expectMoonIcon();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');

    // Second click: -> Light mode
    act(() => {
      fireEvent.click(button);
    });
    expectSunIcon();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
  });
});
