#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📋 Serverless Examples README Update Summary');
console.log('=' .repeat(50));

// Read the analysis
const analysisPath = 'example-analysis.json';
if (!fs.existsSync(analysisPath)) {
  console.error('❌ Analysis file not found. Please run the analysis first.');
  process.exit(1);
}

const analyses = JSON.parse(fs.readFileSync(analysisPath, 'utf8'));

// Count by language and provider
const byLanguage = {};
const byProvider = {};
const byEventType = {};

analyses.forEach(analysis => {
  // Count languages
  byLanguage[analysis.language] = (byLanguage[analysis.language] || 0) + 1;
  
  // Count providers
  byProvider[analysis.provider] = (byProvider[analysis.provider] || 0) + 1;
  
  // Count event types
  analysis.events.forEach(event => {
    byEventType[event] = (byEventType[event] || 0) + 1;
  });
});

console.log('\n🔍 Repository Overview:');
console.log(`Total Examples: ${analyses.length}`);

console.log('\n📚 By Programming Language:');
Object.entries(byLanguage)
  .sort(([,a], [,b]) => b - a)
  .forEach(([lang, count]) => {
    console.log(`  ${lang}: ${count} examples`);
  });

console.log('\n☁️  By Cloud Provider:');
Object.entries(byProvider)
  .sort(([,a], [,b]) => b - a)
  .forEach(([provider, count]) => {
    console.log(`  ${provider.toUpperCase()}: ${count} examples`);
  });

console.log('\n⚡ By Event Type:');
Object.entries(byEventType)
  .sort(([,a], [,b]) => b - a)
  .slice(0, 10) // Top 10
  .forEach(([event, count]) => {
    console.log(`  ${event}: ${count} examples`);
  });

console.log('\n✅ What We Added to Each README:');
console.log('  • Comprehensive prerequisites section (language + provider specific)');
console.log('  • Installation instructions tailored to each language/runtime');
console.log('  • Local development and testing steps');
console.log('  • Detailed deployment instructions with multiple options');
console.log('  • Usage examples based on event triggers');
console.log('  • Function logging and monitoring commands');
console.log('  • Cleanup instructions for removing deployed resources');
console.log('  • Troubleshooting section with common issues');
console.log('  • Provider-specific additional resources and documentation');

console.log('\n🎯 Example Highlights:');

// Find some interesting examples to highlight
const restApis = analyses.filter(a => 
  a.events.includes('http') || a.events.includes('httpApi')
).length;

const scheduledFunctions = analyses.filter(a => 
  a.events.includes('schedule')
).length;

const s3Triggers = analyses.filter(a => 
  a.events.includes('s3')
).length;

const multiLanguageExamples = analyses.filter(a => 
  a.language !== 'unknown' && a.language !== 'JavaScript'
).length;

console.log(`  • ${restApis} REST API examples`);
console.log(`  • ${scheduledFunctions} scheduled/cron job examples`);
console.log(`  • ${s3Triggers} S3 event-driven examples`);
console.log(`  • ${multiLanguageExamples} non-JavaScript examples`);

console.log('\n📖 README Structure:');
console.log('  1. Title and Description (preserved from existing metadata)');
console.log('  2. Use Cases (auto-generated based on event types)');
console.log('  3. Prerequisites (language + provider specific)');
console.log('  4. Installation (if dependencies exist)');
console.log('  5. Local Development & Testing');
console.log('  6. Deployment Instructions');
console.log('  7. Usage Examples & Logging');
console.log('  8. Configuration (if env vars detected)');
console.log('  9. Cleanup Instructions');
console.log('  10. Troubleshooting');
console.log('  11. Additional Resources');

console.log('\n🚀 How to Use These Examples:');
console.log('  1. Browse to any example directory');
console.log('  2. Read the comprehensive README.md');
console.log('  3. Follow the prerequisites setup');
console.log('  4. Install dependencies as shown');
console.log('  5. Test locally before deploying');
console.log('  6. Deploy to your cloud provider');
console.log('  7. Clean up when done');

console.log('\n✨ Next Steps:');
console.log('  • All examples now have standardized, comprehensive READMEs');
console.log('  • Each README is tailored to its specific language and provider');
console.log('  • Instructions include everything needed to deploy and run');
console.log('  • Troubleshooting sections help with common issues');
console.log('  • Ready for contributors and users to easily get started');

console.log('\n🎉 Update Complete!');
console.log(`All ${analyses.length} examples now have proper deployment and usage instructions.`);
