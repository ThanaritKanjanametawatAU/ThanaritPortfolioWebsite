import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blog from '../Blog';
import fs from 'fs';
import path from 'path';

// Mock IntersectionObserver
beforeEach(() => {
  global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

describe('Fish Speech Blog Content Tests', () => {
  const htmlPath = path.join(__dirname, '../../../sd-pages/a4-fish-speech-voice-cloning.html');
  
  describe('Date Update', () => {
    test('Fish Speech blog post should have date May 26, 2025', () => {
      render(<Blog />);
      const fishSpeechDateElements = screen.queryAllByText(/May 26, 2025/i);
      expect(fishSpeechDateElements.length).toBeGreaterThan(0);
    });
  });

  describe('Mobile Responsiveness', () => {
    test('Blog HTML should have viewport meta tag and responsive CSS', () => {
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        
        // Check viewport meta tag
        expect(html).toMatch(/<meta name="viewport" content="width=device-width/);
        
        // Check for responsive containers
        expect(html).toMatch(/class="container"/);
        expect(html).toMatch(/class="content"/);
        
        // Check for media queries
        expect(html).toMatch(/@media \(max-width: 768px\)/);
      }
    });
  });

  describe('Examples and Calculations', () => {
    test('Blog should contain concrete examples', () => {
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        
        // Check for example sections
        expect(html).toMatch(/Concrete Example:|Example:/);
        expect(html).toMatch(/Let's say|For instance|Consider/);
        
        // Check for numerical examples
        expect(html).toMatch(/\d+\.\d+/); // Decimal numbers
        expect(html).toMatch(/Step \d+:/); // Step by step
      }
    });

    test('Blog should have vector quantization example', () => {
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        
        // Check for VQ example
        expect(html).toMatch(/Vector Quantization/);
        expect(html).toMatch(/encoder output.*=.*\[.*\]/); // Array notation
        expect(html).toMatch(/distance|Distance/);
      }
    });

    test('Blog should have VAE example', () => {
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        
        // Check for VAE example
        expect(html).toMatch(/VAE.*Example|example.*VAE/i);
        expect(html).toMatch(/latent|Latent/);
        expect(html).toMatch(/sample|Sample/);
      }
    });
  });

  describe('Equation Formatting', () => {
    test('All equations should use proper LaTeX notation', () => {
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        
        // Check MathJax configuration
        expect(html).toMatch(/MathJax.*{/);
        expect(html).toMatch(/inlineMath.*\$.*\$/);
        
        // Check for LaTeX delimiters
        expect(html).toMatch(/\\\[.*?\\\]/); // Display math
        expect(html).toMatch(/\$.*?\$/); // Inline math
        
        // Check for LaTeX commands
        expect(html).toMatch(/\\frac|\\sum|\\text|\\arg\\min/);
      }
    });
  });

  describe('Content Structure', () => {
    test('Blog should have example headings', () => {
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        
        // Check for example headings
        expect(html).toMatch(/h\d.*>.*Example/);
        expect(html).toMatch(/example-box|info-box.*Example/);
      }
    });
  });
});