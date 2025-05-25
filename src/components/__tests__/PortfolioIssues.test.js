import { test, expect } from '@playwright/test';

test.describe('Portfolio Website Issues', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Contact section should not have text overflow', async ({ page }) => {
    // Navigate to contact section
    await page.click('a[href="#contact"]');
    await page.waitForTimeout(1000); // Wait for scroll animation
    
    // Check LinkedIn card for text overflow
    const linkedInCard = await page.locator('.contact-card:has-text("LinkedIn")');
    const cardBounds = await linkedInCard.boundingBox();
    
    // Check if text is contained within card
    const linkedInText = await linkedInCard.locator('a').boundingBox();
    
    expect(linkedInText.x).toBeGreaterThanOrEqual(cardBounds.x);
    expect(linkedInText.x + linkedInText.width).toBeLessThanOrEqual(cardBounds.x + cardBounds.width);
    
    // Take screenshot for visual verification
    await page.screenshot({ 
      path: 'test-results/contact-overflow.png',
      clip: cardBounds 
    });
  });

  test('Projects section headers should have proper spacing', async ({ page }) => {
    // Navigate to projects section
    await page.click('a[href="#projects"]');
    await page.waitForTimeout(1000);
    
    // Get elements
    const title = await page.locator('.section-title:has-text("Featured Projects")');
    const subtitle = await page.locator('.section-subtitle:has-text("Exploring the intersection")');
    
    // Get bounding boxes
    const titleBox = await title.boundingBox();
    const subtitleBox = await subtitle.boundingBox();
    
    // Calculate spacing between title and subtitle
    const spacing = subtitleBox.y - (titleBox.y + titleBox.height);
    
    // Expect at least 20px spacing (approximately 1.25rem at 16px base)
    expect(spacing).toBeGreaterThanOrEqual(20);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'test-results/projects-spacing.png',
      clip: {
        x: titleBox.x,
        y: titleBox.y,
        width: Math.max(titleBox.width, subtitleBox.width),
        height: (subtitleBox.y + subtitleBox.height) - titleBox.y
      }
    });
  });

  test('Blog "Read More" links should open in new tab', async ({ page, context }) => {
    // Navigate to blog section
    await page.click('a[href="#blog"]');
    await page.waitForTimeout(1000);
    
    // Get all blog links
    const blogLinks = await page.locator('.blog-link:has-text("Read More")').all();
    
    // Check each link has target="_blank"
    for (const link of blogLinks) {
      const target = await link.getAttribute('target');
      expect(target).toBe('_blank');
      
      const rel = await link.getAttribute('rel');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    }
    
    // Test clicking doesn't navigate away from current page
    const currentUrl = page.url();
    
    // Listen for new page
    const pagePromise = context.waitForEvent('page');
    
    // Click first blog link
    await blogLinks[0].click();
    
    // Should open in new tab
    const newPage = await pagePromise;
    expect(newPage.url()).toContain('/sd-pages/');
    
    // Original page should still be on the same URL
    expect(page.url()).toBe(currentUrl);
    
    await newPage.close();
  });

  test('Contact section should handle long email addresses', async ({ page }) => {
    // Navigate to contact section
    await page.click('a[href="#contact"]');
    await page.waitForTimeout(1000);
    
    // Check email card
    const emailCard = await page.locator('.contact-card:has-text("Email")');
    const emailLink = await emailCard.locator('a');
    
    // Check CSS properties
    const styles = await emailLink.evaluate(el => {
      const computed = window.getComputedStyle(el);
      return {
        wordBreak: computed.wordBreak,
        overflowWrap: computed.overflowWrap,
        overflow: computed.overflow
      };
    });
    
    // Should have proper text wrapping styles
    expect(styles.wordBreak).toBe('break-word');
    expect(styles.overflowWrap).toBe('break-word');
  });
});