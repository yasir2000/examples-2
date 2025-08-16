<!--
title: 'AWS Send SMS Message with Twilio example in NodeJS'
description: 'This example demonstrates how to send SMS messages with the Twilio SDK and AWS lambda.'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/darrenhgc'
authorName: 'Darren Holland'
authorAvatar: 'https://avatars0.githubusercontent.com/u/28113106?v=4&s=140'
-->

# AWS Send SMS Message with Twilio example in NodeJS

This example demonstrates how to send SMS messages with the Twilio SDK and AWS lambda.

## Use Cases

- REST API backend
- Microservices architecture
- Serverless application development

## Prerequisites

- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed
- [AWS CLI](https://aws.amazon.com/cli/) configured (if using AWS)
- Valid cloud provider credentials configured
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- npm or yarn package manager

## Installation

Install dependencies:

```bash
npm install
```

Or using yarn:
```bash
yarn install
```

## Local Development

### Test individual functions

Test a function locally:
```bash
serverless invoke local --function sendText
```

### Run with local development server

Start local development server:
```bash
serverless offline
```

Note: You may need to install serverless-offline plugin:
```bash
npm install --save-dev serverless-offline
```

## Deployment

### Deploy to cloud

Deploy the service:
```bash
serverless deploy
```

Deploy a single function (faster for development):
```bash
serverless deploy function --function functionName
```

### Deploy to specific stage/region

Deploy to a specific stage:
```bash
serverless deploy --stage production
```

Deploy to a specific region:
```bash
serverless deploy --region eu-west-1
```

### Usage Examples

Once deployed, you can test the HTTP endpoints:
```bash
curl https://your-api-gateway-url/dev/endpoint
```

### View logs

View function logs:
```bash
serverless logs --function sendText
```

Tail logs in real-time:
```bash
serverless logs --function sendText --tail
```

## Configuration

This service can be configured using environment variables or serverless.yml custom section.

### Environment Variables

- `TWILIO_ACCOUNT_SID`: YOUR-TWILIO-ACCOUNT-SID-HERE
- `TWILIO_AUTH_TOKEN`: YOUR-TWILIO-AUTH-TOKEN-HERE
- `TWILIO_PHONE_NUMBER`: YOUR-TWILIO-PHONE-NUMBER-HERE

## Cleanup

Remove the deployed service and all resources:

```bash
serverless remove
```

Remove from specific stage:
```bash
serverless remove --stage production
```

## Troubleshooting

### Common Issues

1. **Permission Errors**: Ensure your cloud provider credentials have necessary permissions
2. **Timeout Issues**: Increase function timeout in serverless.yml if needed
3. **Memory Issues**: Increase function memory allocation in serverless.yml

### Debug Mode

Enable debug mode for more verbose output:
```bash
SLS_DEBUG=* serverless deploy
```

### AWS Specific Issues

- **Region Issues**: Ensure you're deploying to the correct AWS region
- **IAM Permissions**: Check that your AWS credentials have necessary IAM permissions
- **VPC Configuration**: If using VPC, ensure proper subnet and security group configuration

## Additional Resources

- [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)
- [AWS Provider Documentation](https://www.serverless.com/framework/docs/providers/aws/)
- [Serverless Examples Repository](https://github.com/serverless/examples)