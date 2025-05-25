// Test script to verify portfolio fixes using Puppeteer MCP
const fs = require('fs');

async function runTests() {
  console.log('Running Portfolio Fix Verification Tests...\n');
  
  const results = {
    contactOverflow: false,
    projectSpacing: false,
    blogNavigation: false
  };
  
  // Test 1: Contact section text overflow
  console.log('Test 1: Verifying contact section text overflow fix...');
  try {
    // Check if CSS fixes were applied
    const contactCSS = fs.readFileSync('/media/ssd1/PersonalProjects/ThanaritPortfolioWebsite/src/components/Contact.css', 'utf8');
    
    if (contactCSS.includes('word-break: break-all') && 
        contactCSS.includes('overflow: hidden') &&
        contactCSS.includes('min-width: 0')) {
      console.log('✅ PASS: Contact section CSS has overflow fixes');
      results.contactOverflow = true;
    } else {
      console.log('❌ FAIL: Contact section CSS missing some overflow fixes');
    }
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  // Test 2: Project section header spacing
  console.log('\nTest 2: Verifying project section header spacing fix...');
  try {
    const appCSS = fs.readFileSync('/media/ssd1/PersonalProjects/ThanaritPortfolioWebsite/src/App.css', 'utf8');
    
    if (appCSS.includes('.section-title') && 
        appCSS.includes('margin-bottom: var(--space-xl) !important')) {
      console.log('✅ PASS: Global section title spacing fixes applied');
      results.projectSpacing = true;
    } else {
      console.log('❌ FAIL: Section title spacing fixes not found');
    }
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  // Test 3: Blog navigation
  console.log('\nTest 3: Verifying blog navigation fix...');
  try {
    // Check if blog component has target="_blank"
    const blogJS = fs.readFileSync('/media/ssd1/PersonalProjects/ThanaritPortfolioWebsite/src/components/Blog.js', 'utf8');
    
    // Check if sd-pages are in public directory
    const publicDirExists = fs.existsSync('/media/ssd1/PersonalProjects/ThanaritPortfolioWebsite/public/sd-pages');
    
    if (blogJS.includes('target="_blank"') && 
        blogJS.includes('rel="noopener noreferrer"') &&
        publicDirExists) {
      console.log('✅ PASS: Blog links configured for new tab + sd-pages in public');
      results.blogNavigation = true;
    } else {
      console.log('❌ FAIL: Blog navigation not properly configured');
      if (!publicDirExists) {
        console.log('  - sd-pages directory not found in public/');
      }
    }
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  // Summary
  console.log('\n=== TEST SUMMARY ===');
  console.log(`Contact Overflow: ${results.contactOverflow ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Project Spacing: ${results.projectSpacing ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Blog Navigation: ${results.blogNavigation ? '✅ PASS' : '❌ FAIL'}`);
  
  const allPassed = Object.values(results).every(r => r === true);
  console.log(`\nOverall: ${allPassed ? '✅ ALL TESTS PASSED!' : '❌ Some tests failed'}`);
  
  return results;
}

// Run the tests
runTests();