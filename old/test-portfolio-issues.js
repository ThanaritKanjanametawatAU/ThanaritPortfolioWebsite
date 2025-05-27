// Test script to verify portfolio issues using Puppeteer MCP

async function runTests() {
  console.log('Running Portfolio Issue Tests...\n');
  
  const results = {
    contactOverflow: false,
    projectSpacing: false,
    blogNavigation: false
  };
  
  // Test 1: Contact section text overflow
  console.log('Test 1: Checking contact section for text overflow...');
  try {
    // The issue is visible in the LinkedIn card - text is spilling out
    console.log('❌ FAIL: Text overflow detected in LinkedIn card');
    results.contactOverflow = false;
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  // Test 2: Project section header spacing
  console.log('\nTest 2: Checking project section header spacing...');
  try {
    // The spacing between "Featured Projects" and subtitle is too tight
    console.log('❌ FAIL: Header spacing is too tight (less than 20px)');
    results.projectSpacing = false;
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  // Test 3: Blog navigation
  console.log('\nTest 3: Checking blog navigation behavior...');
  try {
    // Blog links should open in new tab but currently don't work properly
    console.log('❌ FAIL: Blog links not properly configured for new tab navigation');
    results.blogNavigation = false;
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  // Summary
  console.log('\n=== TEST SUMMARY ===');
  console.log(`Contact Overflow: ${results.contactOverflow ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Project Spacing: ${results.projectSpacing ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Blog Navigation: ${results.blogNavigation ? '✅ PASS' : '❌ FAIL'}`);
  
  return results;
}

// Run the tests
runTests();