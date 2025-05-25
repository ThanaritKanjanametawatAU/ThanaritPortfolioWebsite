import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Hero';
import Contact from '../Contact';

describe('Contact Links Functionality', () => {
  describe('Hero Component Contact Links', () => {
    beforeEach(() => {
      render(<Hero />);
    });

    test('GitHub link should have correct href and open in new tab', () => {
      const githubLinks = screen.getAllByTitle('GitHub');
      const githubLink = githubLinks.find(link => link.tagName === 'A');
      
      expect(githubLink).toHaveAttribute('href', 'https://github.com/ThanaritKanjanametawatAU');
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('LinkedIn link should have correct href and open in new tab', () => {
      const linkedinLinks = screen.getAllByTitle('LinkedIn');
      const linkedinLink = linkedinLinks.find(link => link.tagName === 'A');
      
      expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/thanarit-kanjanametawat-1354b7211/');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('HuggingFace link should have correct href and open in new tab', () => {
      const huggingfaceLinks = screen.getAllByTitle('HuggingFace');
      const huggingfaceLink = huggingfaceLinks.find(link => link.tagName === 'A');
      
      expect(huggingfaceLink).toHaveAttribute('href', 'https://huggingface.co/Thanarit');
      expect(huggingfaceLink).toHaveAttribute('target', '_blank');
      expect(huggingfaceLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('Discord link should have correct href and open in new tab', () => {
      const discordLinks = screen.getAllByTitle('Discord');
      const discordLink = discordLinks.find(link => link.tagName === 'A');
      
      expect(discordLink).toHaveAttribute('href', 'https://discord.com/users/bonusmoney0');
      expect(discordLink).toHaveAttribute('target', '_blank');
      expect(discordLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('Email link should have correct mailto href', () => {
      const emailLinks = screen.getAllByTitle('Email');
      const emailLink = emailLinks.find(link => link.tagName === 'A');
      
      expect(emailLink).toHaveAttribute('href', 'mailto:thanarit.bonus@gmail.com');
      expect(emailLink).not.toHaveAttribute('target');
      expect(emailLink).not.toHaveAttribute('rel');
    });

    test('All social links should be clickable anchor tags', () => {
      const socialLinks = document.querySelectorAll('.hero-social a');
      
      expect(socialLinks).toHaveLength(5);
      socialLinks.forEach(link => {
        expect(link.tagName).toBe('A');
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Contact Component Contact Links', () => {
    beforeEach(() => {
      render(<Contact />);
    });

    test('Email contact card should have clickable link', () => {
      const emailText = screen.getByText('thanarit.bonus@gmail.com');
      const emailLink = emailText.closest('a');
      
      expect(emailLink).toHaveAttribute('href', 'mailto:thanarit.bonus@gmail.com');
      expect(emailLink).toHaveAttribute('target', '_blank');
      expect(emailLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('LinkedIn contact card should have clickable link', () => {
      const linkedinText = screen.getByText('Thanarit Kanjanametawat');
      const linkedinLink = linkedinText.closest('a');
      
      expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/thanarit-kanjanametawat-1354b7211/');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('GitHub contact card should have clickable link', () => {
      const githubText = screen.getByText('ThanaritKanjanametawatAU');
      const githubLink = githubText.closest('a');
      
      expect(githubLink).toHaveAttribute('href', 'https://github.com/ThanaritKanjanametawatAU');
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('HuggingFace contact card should have clickable link', () => {
      const huggingfaceText = screen.getByText('Thanarit');
      const huggingfaceLink = huggingfaceText.closest('a');
      
      expect(huggingfaceLink).toHaveAttribute('href', 'https://huggingface.co/Thanarit');
      expect(huggingfaceLink).toHaveAttribute('target', '_blank');
      expect(huggingfaceLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('Discord contact card should have clickable link', () => {
      const discordText = screen.getByText('bonusmoney0');
      const discordLink = discordText.closest('a');
      
      expect(discordLink).toHaveAttribute('href', 'https://discord.com/users/bonusmoney0');
      expect(discordLink).toHaveAttribute('target', '_blank');
      expect(discordLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('Location should not have a link', () => {
      const locationText = screen.getByText('Bangkok, Thailand');
      
      // Location text should not be wrapped in a link
      expect(locationText.closest('a')).toBeNull();
      // Verify it's rendered as plain text (not in an anchor tag)
      expect(locationText.tagName).toBe('P');
    });

    test('All contact cards with links should open in new tab', () => {
      const allLinks = screen.getAllByRole('link');
      const contactLinks = allLinks.filter(link => 
        link.href.includes('mailto:') || 
        link.href.includes('linkedin.com') || 
        link.href.includes('github.com') || 
        link.href.includes('huggingface.co') || 
        link.href.includes('discord.com')
      );
      
      contactLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });

  describe('Discord Link Special Features', () => {
    test('Discord link should allow direct friend request', () => {
      render(<Hero />);
      const discordLinks = screen.getAllByTitle('Discord');
      const discordLink = discordLinks.find(link => link.tagName === 'A');
      
      // Discord user profile links allow direct messaging/friend requests
      expect(discordLink.href).toContain('discord.com/users/');
      expect(discordLink.href).toContain('bonusmoney0');
    });

    test('Contact component Discord link should match Hero component', () => {
      const { rerender } = render(<Hero />);
      const heroDiscordLinks = screen.getAllByTitle('Discord');
      const heroDiscordLink = heroDiscordLinks.find(link => link.tagName === 'A');
      const heroHref = heroDiscordLink.getAttribute('href');
      
      rerender(<Contact />);
      const contactDiscordLink = screen.getByText('bonusmoney0').closest('a');
      
      expect(contactDiscordLink).toHaveAttribute('href', heroHref);
    });
  });
});