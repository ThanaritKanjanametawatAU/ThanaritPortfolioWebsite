// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
};

// Mock GSAP
jest.mock('gsap', () => ({
  gsap: {
    fromTo: jest.fn(),
    to: jest.fn(),
    from: jest.fn(),
    registerPlugin: jest.fn(),
    ticker: {
      add: jest.fn(),
      remove: jest.fn()
    }
  },
  ScrollTrigger: {
    update: jest.fn(),
    refresh: jest.fn()
  }
}));

// Add innerText to jsdom
Object.defineProperty(HTMLElement.prototype, 'innerText', {
  get() {
    return this.textContent;
  },
  set(value) {
    this.textContent = value;
  }
});

// Mock Lenis
jest.mock('lenis', () => {
  return class Lenis {
    constructor() {}
    on() {}
    raf() {}
    destroy() {}
  };
});

// Mock framer-motion
jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: React.forwardRef(({ children, whileHover, whileTap, variants, initial, animate, transition, custom, ...props }, ref) => 
        React.createElement('div', { ...props, ref }, children)
      ),
      a: React.forwardRef(({ children, whileHover, whileTap, variants, initial, animate, transition, custom, ...props }, ref) => 
        React.createElement('a', { ...props, ref }, children)
      ),
      section: React.forwardRef(({ children, whileHover, whileTap, variants, initial, animate, transition, custom, ...props }, ref) => 
        React.createElement('section', { ...props, ref }, children)
      ),
    },
    useAnimation: () => ({
      start: jest.fn(),
      set: jest.fn()
    }),
    useInView: () => [null, true]
  };
});

// Mock react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => [null, true]
}));