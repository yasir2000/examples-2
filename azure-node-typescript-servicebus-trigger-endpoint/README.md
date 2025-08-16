<!--
title: 'Using Azure Service Queue to trigger Azure Function'
description: 'This example demonstrates how to trigger an Azure function when a message arrives in Service Bus Queue'
layout: Doc
framework: v1
platform: AZURE
language: typescript
priority: 10
authorLink: 'https://github.com/Kurshit'
authorName: 'Kurshit Kukreja'
authorAvatar: 'https://avatars0.githubusercontent.com/u/30333780?s=400&u=53af20c512014f0b7250ed6ac003be1c5cfbddd7&v=4'
-->

# Using Azure Service Queue to trigger Azure Function

This example demonstrates how to trigger an Azure function when a message arrives in Service Bus Queue

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
serverless invoke local --function sendMessage
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
serverless logs --function sendMessage
```

Tail logs in real-time:
```bash
serverless logs --function sendMessage --tail
```

## Configuration

This service can be configured using environment variables or serverless.yml custom section.

### Environment Variables

- `SERVICE_BUS_CONNECTION_STRING`: <AzureServiceBusConnectionString>

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
- [AZURE Provider Documentation](https://www.serverless.com/framework/docs/providers/azure/)
- [Serverless Examples Repository](https://github.com/serverless/examples)