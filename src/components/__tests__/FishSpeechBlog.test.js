import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blog from '../Blog';
import fs from 'fs';
import path from 'path';

describe('Fish Speech Blog Integration', () => {
  // Test 1: Blog post should appear in the blog list
  test('Fish Speech blog post should be displayed in blog list', () => {
    render(<Blog />);
    
    const fishSpeechPost = screen.getByText(/Fish Speech Voice Cloning/i);
    expect(fishSpeechPost).toBeInTheDocument();
  });

  // Test 2: Blog post should have correct metadata
  test('Fish Speech blog post should have correct date and description', () => {
    render(<Blog />);
    
    const excerpt = screen.getByText(/Comprehensive guide to understanding Fish Speech/i);
    expect(excerpt).toBeInTheDocument();
    
    const date = screen.getByText(/May 26, 2025/i);
    expect(date).toBeInTheDocument();
  });

  // Test 3: Blog post link should point to correct location
  test('Fish Speech blog post link should be correct', () => {
    render(<Blog />);
    
    const blogLinks = screen.getAllByRole('link');
    const fishSpeechLink = blogLinks.find(link => 
      link.getAttribute('href') === '/sd-pages/a4-fish-speech-voice-cloning.html'
    );
    
    expect(fishSpeechLink).toBeTruthy();
  });

  // Test 4: Blog post thumbnail should load
  test('Fish Speech blog post thumbnail should be present', () => {
    render(<Blog />);
    
    const thumbnails = screen.getAllByRole('img');
    const fishSpeechThumb = thumbnails.find(img => 
      img.getAttribute('src')?.includes('a4')
    );
    
    expect(fishSpeechThumb).toBeTruthy();
  });
});

describe('Fish Speech Page Content', () => {
  const htmlPath = path.join(__dirname, '../../../sd-pages/a4-fish-speech-voice-cloning.html');
  
  // Test 5: HTML file should exist
  test('Fish Speech HTML file should exist in correct location', () => {
    const fileExists = fs.existsSync(htmlPath);
    expect(fileExists).toBe(true);
  });

  // Test 6: Equations should render properly with MathJax
  test('mathematical equations should be properly formatted with MathJax', () => {
    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      
      // Check for MathJax script
      expect(html).toMatch(/MathJax/);
      
      // Check for equation delimiters
      expect(html).toMatch(/\\\[.*?\\\]/s); // Display math
      expect(html).toMatch(/\\\(.*?\\\)/s); // Inline math
    }
  });

  // Test 7: Navigation functionality should work
  test('table of contents links should have correct anchors', () => {
    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      
      // Check TOC links
      expect(html).toMatch(/href="#introduction"/);
      expect(html).toMatch(/href="#math-foundations"/);
      expect(html).toMatch(/href="#technical-concepts"/);
      expect(html).toMatch(/href="#deep-learning"/);
      expect(html).toMatch(/href="#audio-processing"/);
      
      // Check corresponding sections exist
      expect(html).toMatch(/id="introduction"/);
      expect(html).toMatch(/id="math-foundations"/);
      expect(html).toMatch(/id="technical-concepts"/);
      expect(html).toMatch(/id="deep-learning"/);
      expect(html).toMatch(/id="audio-processing"/);
    }
  });

  // Test 8: Essential page elements should be present
  test('essential page elements should exist', () => {
    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      
      expect(html).toMatch(/id="progressBar"/);
      expect(html).toMatch(/class="progress-bar"/);
      expect(html).toMatch(/class="info-box"/);
      expect(html).toMatch(/class="warning-box"/);
      expect(html).toMatch(/class="equation"/);
    }
  });

  // Test 9: Responsive design should be implemented
  test('responsive design should be implemented', () => {
    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      
      // Check for media queries
      expect(html).toMatch(/@media \(max-width: 768px\)/);
      
      // Check for responsive grid
      expect(html).toMatch(/grid-template-columns/);
    }
  });

  // Test 10: Syntax highlighting should be configured
  test('code highlighting should be properly set up', () => {
    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      
      // Check for highlight.js
      expect(html).toMatch(/highlight\.js/);
      expect(html).toMatch(/hljs\.highlightAll\(\)/);
    }
  });
});