<!--
title: 'GCF Simple HTTP Endpoint example in NodeJS'
description: 'This example demonstrates how to setup a simple HTTP GET endpoint.'
layout: Doc
framework: v1
platform: 'Google Cloud'
language: nodeJS
priority: 10
authorLink: 'https://github.com/pmuens'
authorName: 'Philipp Muens'
authorAvatar: 'https://avatars3.githubusercontent.com/u/1606004?v=4&s=140'
-->

# GCF Simple HTTP Endpoint example in NodeJS

This example demonstrates how to setup a simple HTTP GET endpoint.

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
serverless invoke local --function helloWorld
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

### Usage Examples

Once deployed, you can test the HTTP endpoints:
```bash
curl https://your-api-gateway-url/dev/endpoint
```

### View logs

View function logs:
```bash
serverless logs --function helloWorld
```

Tail logs in real-time:
```bash
serverless logs --function helloWorld --tail
```

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

## Additional Resources

- [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)
- [GOOGLE Provider Documentation](https://www.serverless.com/framework/docs/providers/google/)
- [Serverless Examples Repository](https://github.com/serverless/examples)