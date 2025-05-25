import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../Contact';

describe('Contact Card Clickable Areas', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  test('Entire GitHub contact card should be clickable', () => {
    // Find the GitHub card by looking for the GitHub text
    const githubText = screen.getByText('ThanaritKanjanametawatAU');
    const githubCard = githubText.closest('.contact-card');
    
    // The entire card should be wrapped in an anchor tag
    expect(githubCard.tagName).toBe('A');
    expect(githubCard).toHaveAttribute('href', 'https://github.com/ThanaritKanjanametawatAU');
  });

  test('Entire LinkedIn contact card should be clickable', () => {
    const linkedinText = screen.getByText('Thanarit Kanjanametawat');
    const linkedinCard = linkedinText.closest('.contact-card');
    
    expect(linkedinCard.tagName).toBe('A');
    expect(linkedinCard).toHaveAttribute('href', 'https://www.linkedin.com/in/thanarit-kanjanametawat-1354b7211/');
  });

  test('Entire Email contact card should be clickable', () => {
    const emailText = screen.getByText('thanarit.bonus@gmail.com');
    const emailCard = emailText.closest('.contact-card');
    
    expect(emailCard.tagName).toBe('A');
    expect(emailCard).toHaveAttribute('href', 'mailto:thanarit.bonus@gmail.com');
  });

  test('Entire Discord contact card should be clickable', () => {
    const discordText = screen.getByText('bonusmoney0');
    const discordCard = discordText.closest('.contact-card');
    
    expect(discordCard.tagName).toBe('A');
    expect(discordCard).toHaveAttribute('href', 'https://discord.com/users/bonusmoney0');
  });

  test('Entire HuggingFace contact card should be clickable', () => {
    const huggingfaceText = screen.getByText('Thanarit');
    const huggingfaceCard = huggingfaceText.closest('.contact-card');
    
    expect(huggingfaceCard.tagName).toBe('A');
    expect(huggingfaceCard).toHaveAttribute('href', 'https://huggingface.co/Thanarit');
  });

  test('Location card should NOT be clickable', () => {
    const locationText = screen.getByText('Bangkok, Thailand');
    const locationCard = locationText.closest('.contact-card');
    
    // Location card should remain a div, not an anchor
    expect(locationCard.tagName).toBe('DIV');
    expect(locationCard).not.toHaveAttribute('href');
  });

  test('Clicking anywhere on a contact card should follow the link', () => {
    const githubText = screen.getByText('ThanaritKanjanametawatAU');
    const githubCard = githubText.closest('.contact-card');
    
    // Card should have proper link attributes
    expect(githubCard).toHaveAttribute('target', '_blank');
    expect(githubCard).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Contact card icons should be clickable as part of the card', () => {
    // Find a card with an icon
    const githubTitle = screen.getByText('GitHub');
    const githubCard = githubTitle.closest('.contact-card');
    const githubIcon = githubCard.querySelector('.contact-icon');
    
    // Icon should be inside the clickable card
    expect(githubCard.contains(githubIcon)).toBe(true);
    expect(githubCard.tagName).toBe('A');
  });

  test('Contact card hover effects should work on entire card', () => {
    const emailText = screen.getByText('thanarit.bonus@gmail.com');
    const emailCard = emailText.closest('.contact-card');
    
    // Card should have hover class or be styled for hover
    expect(emailCard).toHaveClass('contact-card');
    
    // Simulate hover
    fireEvent.mouseEnter(emailCard);
    
    // Card should still be a link during hover
    expect(emailCard.tagName).toBe('A');
  });

  test('All clickable cards should maintain their styling', () => {
    const allCards = document.querySelectorAll('.contact-card');
    
    allCards.forEach(card => {
      if (card.querySelector('a') || card.tagName === 'A') {
        // If it's meant to be clickable, the entire card should be an anchor
        if (!card.textContent.includes('Bangkok, Thailand')) {
          expect(card.tagName).toBe('A');
          expect(card).toHaveClass('contact-card');
        }
      }
    });
  });
});