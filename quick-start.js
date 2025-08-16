#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Quick start guide for users
console.log('🚀 Serverless Examples - Quick Start Guide');
console.log('=' .repeat(50));

const examples = fs.readdirSync('.', { withFileTypes: true })
  .filter(item => item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules')
  .map(item => item.name)
  .filter(name => !['node_modules', '.git', '.github'].includes(name) && fs.existsSync(path.join(name, 'serverless.yml')));

console.log(`\n📚 Found ${examples.length} serverless examples`);

console.log('\n🔥 Popular Starting Points:');
console.log('  • aws-node-simple-http-endpoint        - Simple HTTP API with Node.js');
console.log('  • aws-python-simple-http-endpoint      - Simple HTTP API with Python');
console.log('  • aws-golang-simple-http-endpoint      - Simple HTTP API with Go');
console.log('  • aws-node-rest-api-with-dynamodb      - REST API with DynamoDB');
console.log('  • aws-node-scheduled-cron              - Scheduled functions');
console.log('  • aws-node-express-api                 - Express.js API');

console.log('\n⚡ How to Get Started:');
console.log('1. Choose an example that fits your needs');
console.log('2. Clone or download the example:');
console.log('   serverless install -u https://github.com/serverless/examples/tree/master/EXAMPLE_NAME -n my-project');
console.log('3. Navigate to the project directory');
console.log('4. Read the README.md for detailed instructions');
console.log('5. Follow the prerequisites setup');
console.log('6. Install dependencies (if any)');
console.log('7. Deploy: serverless deploy');

console.log('\n📖 Each Example Includes:');
console.log('  ✅ Complete prerequisites list');
console.log('  ✅ Installation instructions');
console.log('  ✅ Local development setup');
console.log('  ✅ Deployment commands');
console.log('  ✅ Usage examples');
console.log('  ✅ Troubleshooting guide');
console.log('  ✅ Cleanup instructions');

console.log('\n🔍 Browse Examples by Category:');

const categories = {
  'HTTP APIs': examples.filter(name => name.includes('http') || name.includes('rest-api') || name.includes('express')),
  'Scheduled Functions': examples.filter(name => name.includes('cron') || name.includes('scheduled')),
  'Data Processing': examples.filter(name => name.includes('dynamodb') || name.includes('s3') || name.includes('kinesis')),
  'Multi-Language': examples.filter(name => name.includes('python') || name.includes('golang') || name.includes('java') || name.includes('ruby')),
  'Cloud Providers': examples.filter(name => name.includes('google') || name.includes('azure') || name.includes('openwhisk'))
};

Object.entries(categories).forEach(([category, exampleList]) => {
  if (exampleList.length > 0) {
    console.log(`\n  ${category} (${exampleList.length} examples):`);
    exampleList.slice(0, 3).forEach(example => {
      console.log(`    • ${example}`);
    });
    if (exampleList.length > 3) {
      console.log(`    ... and ${exampleList.length - 3} more`);
    }
  }
});

console.log('\n💡 Need Help?');
console.log('  • Each example has a detailed README.md with step-by-step instructions');
console.log('  • Check the Troubleshooting section in each README');
console.log('  • Visit https://www.serverless.com/framework/docs/ for full documentation');
console.log('  • Join the community at https://forum.serverless.com');

console.log('\n🎯 Quick Commands:');
console.log('  # Install an example');
console.log('  serverless install -u https://github.com/serverless/examples/tree/master/aws-node-simple-http-endpoint -n my-api');
console.log('');
console.log('  # Deploy');
console.log('  cd my-api && serverless deploy');
console.log('');
console.log('  # Remove');
console.log('  serverless remove');

console.log('\n✨ Happy coding with Serverless! ✨');
