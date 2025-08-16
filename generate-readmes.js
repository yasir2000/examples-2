const fs = require('fs');
const path = require('path');
const { analyzeExample, detectLanguageAndRuntime, parseServerlessConfig } = require('./update-readmes');

// Template generators for different languages and platforms
const getPrerequisites = (language, provider, hasPackageJson) => {
  const common = [
    '- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed'
  ];

  // Provider-specific prerequisites
  if (provider === 'aws') {
    common.push('- [AWS CLI](https://aws.amazon.com/cli/) configured');
    common.push('- Valid AWS credentials configured');
  } else if (provider === 'google') {
    common.push('- [Google Cloud SDK](https://cloud.google.com/sdk) installed and configured');
    common.push('- Valid Google Cloud credentials configured');
  } else if (provider === 'azure') {
    common.push('- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/) installed and configured');
    common.push('- Valid Azure credentials configured');
  } else if (provider === 'openwhisk') {
    common.push('- [OpenWhisk CLI (wsk)](https://github.com/apache/openwhisk-cli) installed and configured');
    common.push('- Valid OpenWhisk credentials configured');
  } else if (provider === 'twilio') {
    common.push('- Valid Twilio account and credentials configured');
  } else if (provider === 'kubeless') {
    common.push('- Kubernetes cluster with Kubeless installed');
    common.push('- kubectl configured to access your cluster');
  } else {
    common.push('- Valid cloud provider credentials configured');
  }

  const languageSpecific = {
    JavaScript: [
      '- [Node.js](https://nodejs.org/) (version 12.x or higher)',
      '- npm or yarn package manager'
    ],
    Python: [
      '- [Python](https://python.org/) (version 3.6 or higher)',
      '- pip package manager'
    ],
    Go: [
      '- [Go](https://golang.org/) (version 1.x)',
      '- Go modules enabled'
    ],
    Java: [
      '- [Java](https://openjdk.java.net/) (version 8 or higher)',
      '- [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/)'
    ],
    Ruby: [
      '- [Ruby](https://ruby-lang.org/) (version 2.7 or higher)',
      '- Bundler gem'
    ],
    'C#': [
      '- [.NET Core](https://dotnet.microsoft.com/) (version 3.1 or higher)'
    ],
    Rust: [
      '- [Rust](https://rustup.rs/) (latest stable version)',
      '- Cargo package manager'
    ]
  };

  return [...common, ...(languageSpecific[language] || [])];
};

const getInstallationSteps = (language, hasPackageJson, exampleDir) => {
  // For examples that have package.json but are not JavaScript, still check if they're actually JS projects
  if (hasPackageJson && language === 'JavaScript') {
    return [
      '```bash',
      'npm install',
      '```',
      '',
      'Or using yarn:',
      '```bash',
      'yarn install',
      '```'
    ];
  }

  const languageSteps = {
    'Python': [
      '```bash',
      'pip install -r requirements.txt',
      '```'
    ],
    'Go': [
      '```bash',
      'go mod tidy',
      '```',
      '',
      'Or if using dep (legacy):',
      '```bash',
      'dep ensure',
      '```'
    ],
    'Ruby': [
      '```bash',
      'bundle install',
      '```'
    ],
    'Java': [
      '```bash',
      'mvn clean install',
      '```',
      '',
      'Or using Gradle:',
      '```bash',
      './gradlew build',
      '```'
    ],
    'C#': [
      '```bash',
      'dotnet restore',
      'dotnet build',
      '```'
    ],
    'Rust': [
      '```bash',
      'cargo build',
      '```'
    ]
  };

  return languageSteps[language] || ['# No additional installation steps required'];
};

const getLocalTestingSteps = (language, functions) => {
  const steps = [
    '### Test individual functions',
    '',
    'Test a function locally:',
    '```bash',
    `serverless invoke local --function ${functions[0] || 'functionName'}`,
    '```'
  ];

  if (language === 'JavaScript') {
    steps.push(
      '',
      '### Run with local development server',
      '',
      'Start local development server:',
      '```bash',
      'serverless offline',
      '```',
      '',
      'Note: You may need to install serverless-offline plugin:',
      '```bash',
      'npm install --save-dev serverless-offline',
      '```'
    );
  }

  return steps;
};

const getDeploymentSteps = (provider) => {
  const baseSteps = [
    '### Deploy to cloud',
    '',
    'Deploy the service:',
    '```bash',
    'serverless deploy',
    '```',
    '',
    'Deploy a single function (faster for development):',
    '```bash',
    'serverless deploy function --function functionName',
    '```'
  ];

  if (provider === 'aws') {
    baseSteps.push(
      '',
      '### Deploy to specific stage/region',
      '',
      'Deploy to a specific stage:',
      '```bash',
      'serverless deploy --stage production',
      '```',
      '',
      'Deploy to a specific region:',
      '```bash',
      'serverless deploy --region eu-west-1',
      '```'
    );
  }

  return baseSteps;
};

const getUsageExamples = (events, functions) => {
  const examples = ['### Usage Examples', ''];

  if (events.includes('httpApi') || events.includes('http')) {
    examples.push(
      'Once deployed, you can test the HTTP endpoints:',
      '```bash',
      'curl https://your-api-gateway-url/dev/endpoint',
      '```',
      ''
    );
  }

  if (events.includes('schedule')) {
    examples.push(
      'This function runs on a schedule. Check CloudWatch logs for execution:',
      '```bash',
      'serverless logs --function functionName',
      '```',
      ''
    );
  }

  if (events.includes('s3')) {
    examples.push(
      'This function is triggered by S3 events. Upload a file to the configured bucket to trigger execution.',
      ''
    );
  }

  if (events.includes('sqs')) {
    examples.push(
      'This function processes SQS messages. Send a message to the queue to trigger execution.',
      ''
    );
  }

  examples.push(
    '### View logs',
    '',
    'View function logs:',
    '```bash',
    `serverless logs --function ${functions[0] || 'functionName'}`,
    '```',
    '',
    'Tail logs in real-time:',
    '```bash',
    `serverless logs --function ${functions[0] || 'functionName'} --tail`,
    '```'
  );

  return examples;
};

const getCleanupSteps = () => {
  return [
    '## Cleanup',
    '',
    'Remove the deployed service and all resources:',
    '',
    '```bash',
    'serverless remove',
    '```',
    '',
    'Remove from specific stage:',
    '```bash',
    'serverless remove --stage production',
    '```'
  ];
};

const getTroubleshootingSection = (language, provider) => {
  const common = [
    '## Troubleshooting',
    '',
    '### Common Issues',
    '',
    '1. **Permission Errors**: Ensure your cloud provider credentials have necessary permissions',
    '2. **Timeout Issues**: Increase function timeout in serverless.yml if needed',
    '3. **Memory Issues**: Increase function memory allocation in serverless.yml',
    '',
    '### Debug Mode',
    '',
    'Enable debug mode for more verbose output:',
    '```bash',
    'SLS_DEBUG=* serverless deploy',
    '```'
  ];

  if (provider === 'aws') {
    common.push(
      '',
      '### AWS Specific Issues',
      '',
      '- **Region Issues**: Ensure you\'re deploying to the correct AWS region',
      '- **IAM Permissions**: Check that your AWS credentials have necessary IAM permissions',
      '- **VPC Configuration**: If using VPC, ensure proper subnet and security group configuration'
    );
  }

  return common;
};

function generateReadmeContent(exampleDir) {
  const analysis = analyzeExample(exampleDir);
  const config = parseServerlessConfig(exampleDir);

  // Extract metadata from existing README if it exists
  const readmePath = path.join(exampleDir, 'README.md');
  let existingMetadata = '';
  let title = '';
  let description = '';

  if (fs.existsSync(readmePath)) {
    const content = fs.readFileSync(readmePath, 'utf8');
    const metadataMatch = content.match(/<!--[\s\S]*?-->/);
    if (metadataMatch) {
      existingMetadata = metadataMatch[0];

      // Extract title and description from metadata
      const titleMatch = existingMetadata.match(/title: '([^']+)'/);
      const descMatch = existingMetadata.match(/description: '([^']+)'/);

      if (titleMatch) title = titleMatch[1];
      if (descMatch) description = descMatch[1];
    }

    // If no metadata title, try to extract from markdown header
    if (!title) {
      const headerMatch = content.match(/^# (.+)$/m);
      if (headerMatch) title = headerMatch[1];
    }
  }

  // Generate fallback title and description if not found
  if (!title) {
    title = exampleDir.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  if (!description) {
    description = `This example demonstrates how to use Serverless Framework with ${analysis.language} on ${analysis.provider.toUpperCase()}.`;
  }

  const content = [];

  // Add metadata if it exists
  if (existingMetadata) {
    content.push(existingMetadata, '');
  }

  // Title and description
  content.push(`# ${title}`, '', description, '');

  // Use cases
  content.push('## Use Cases', '');

  // Add relevant use cases based on events
  if (analysis.events.includes('httpApi') || analysis.events.includes('http')) {
    content.push('- REST API backend');
    content.push('- Microservices architecture');
  }
  if (analysis.events.includes('schedule')) {
    content.push('- Scheduled tasks and cron jobs');
    content.push('- Background processing');
  }
  if (analysis.events.includes('s3')) {
    content.push('- File processing and transformation');
    content.push('- Event-driven data processing');
  }
  if (analysis.events.includes('sqs')) {
    content.push('- Asynchronous message processing');
    content.push('- Queue-based workflows');
  }
  content.push('- Serverless application development', '');

  // Prerequisites
  content.push('## Prerequisites', '');
  getPrerequisites(analysis.language, analysis.provider, analysis.hasPackageJson).forEach(req => {
    content.push(req);
  });
  content.push('');

  // Installation
  const needsInstallation = analysis.hasPackageJson ||
    (analysis.language !== 'unknown' && analysis.language !== 'JavaScript') ||
    fs.existsSync(path.join(exampleDir, 'requirements.txt')) ||
    fs.existsSync(path.join(exampleDir, 'go.mod')) ||
    fs.existsSync(path.join(exampleDir, 'Gemfile')) ||
    fs.existsSync(path.join(exampleDir, 'pom.xml')) ||
    fs.existsSync(path.join(exampleDir, 'Cargo.toml'));

  if (needsInstallation) {
    content.push('## Installation', '');
    content.push('Install dependencies:', '');
    getInstallationSteps(analysis.language, analysis.hasPackageJson, exampleDir).forEach(step => {
      content.push(step);
    });
    content.push('');
  }

  // Local Development
  content.push('## Local Development', '');
  getLocalTestingSteps(analysis.language, analysis.functions).forEach(step => {
    content.push(step);
  });
  content.push('');

  // Deployment
  content.push('## Deployment', '');
  getDeploymentSteps(analysis.provider).forEach(step => {
    content.push(step);
  });
  content.push('');

  // Usage
  getUsageExamples(analysis.events, analysis.functions).forEach(step => {
    content.push(step);
  });
  content.push('');

  // Configuration (if there are environment variables or complex setup)
  if (config && (config.provider && config.provider.environment || config.custom)) {
    content.push('## Configuration', '');
    content.push('This service can be configured using environment variables or serverless.yml custom section.', '');

    if (config.provider && config.provider.environment) {
      content.push('### Environment Variables', '');
      Object.keys(config.provider.environment).forEach(key => {
        content.push(`- \`${key}\`: ${config.provider.environment[key]}`);
      });
      content.push('');
    }
  }

  // Cleanup
  getCleanupSteps().forEach(step => {
    content.push(step);
  });
  content.push('');

  // Troubleshooting
  getTroubleshootingSection(analysis.language, analysis.provider).forEach(step => {
    content.push(step);
  });
  content.push('');

  // Additional Resources
  content.push(
    '## Additional Resources',
    '',
    '- [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)',
    `- [${analysis.provider.toUpperCase()} Provider Documentation](https://www.serverless.com/framework/docs/providers/${analysis.provider}/)`,
    '- [Serverless Examples Repository](https://github.com/serverless/examples)'
  );

  // Add provider-specific links
  if (analysis.provider === 'aws') {
    content.push('- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)');
    content.push('- [AWS API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)');
  } else if (analysis.provider === 'google') {
    content.push('- [Google Cloud Functions Documentation](https://cloud.google.com/functions/docs)');
  } else if (analysis.provider === 'azure') {
    content.push('- [Azure Functions Documentation](https://docs.microsoft.com/en-us/azure/azure-functions/)');
  } else if (analysis.provider === 'openwhisk') {
    content.push('- [Apache OpenWhisk Documentation](https://openwhisk.apache.org/documentation.html)');
  }

  return content.join('\n');
}

// Update README for a specific example
function updateExampleReadme(exampleDir) {
  console.log(`\nUpdating README for: ${exampleDir}`);

  try {
    const readmeContent = generateReadmeContent(exampleDir);
    const readmePath = path.join(exampleDir, 'README.md');

    fs.writeFileSync(readmePath, readmeContent);
    console.log(`✅ Updated ${readmePath}`);

  } catch (error) {
    console.error(`❌ Error updating ${exampleDir}: ${error.message}`);
  }
}

// Main function to update all READMEs
function updateAllReadmes() {
  const analysisPath = 'example-analysis.json';

  if (!fs.existsSync(analysisPath)) {
    console.error('Please run the analysis first: node update-readmes.js');
    return;
  }

  const analyses = JSON.parse(fs.readFileSync(analysisPath, 'utf8'));

  console.log(`Updating READMEs for ${analyses.length} examples...`);

  let updated = 0;
  let errors = 0;

  analyses.forEach(analysis => {
    try {
      updateExampleReadme(analysis.directory);
      updated++;
    } catch (error) {
      console.error(`Error updating ${analysis.directory}: ${error.message}`);
      errors++;
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`✅ Updated: ${updated}`);
  console.log(`❌ Errors: ${errors}`);
}

// Export functions for use
module.exports = {
  generateReadmeContent,
  updateExampleReadme,
  updateAllReadmes
};

// Run if called directly
if (require.main === module) {
  const command = process.argv[2];

  if (command === 'all') {
    updateAllReadmes();
  } else if (command && fs.existsSync(command)) {
    updateExampleReadme(command);
  } else {
    console.log('Usage:');
    console.log('  node generate-readmes.js all                    # Update all READMEs');
    console.log('  node generate-readmes.js <example-directory>    # Update specific example');
  }
}
