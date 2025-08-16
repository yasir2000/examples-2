<!--
title: 'Azure Simple HTTP Endpoint example in NodeJS'
description: 'In this example, we deploy an HTTP Node.js Azure Function. This example shows you how to read properties off of a query string or the request body, then set a result back to Azure.'
layout: Doc
framework: v1
platform: Azure
language: nodeJS
priority: 10
authorLink: 'https://github.com/fiveisprime'
authorName: 'Matt Hernandez'
authorAvatar: 'https://avatars2.githubusercontent.com/u/1186948?v=4&s=140'
-->

# Azure Simple HTTP Endpoint example in NodeJS

In this example, we deploy an HTTP Node.js Azure Function. This example shows you how to read properties off of a query string or the request body, then set a result back to Azure.

## Use Cases

- REST API backend
- Microservices architecture
- Serverless application development

## Prerequisites

- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/) installed and configured
- Valid Azure credentials configured

## Installation

Install dependencies:

# No additional installation steps required

## Local Development

### Test individual functions

Test a function locally:
```bash
serverless invoke local --function hello
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
serverless logs --function hello
```

Tail logs in real-time:
```bash
serverless logs --function hello --tail
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
- [AZURE Provider Documentation](https://www.serverless.com/framework/docs/providers/azure/)
- [Serverless Examples Repository](https://github.com/serverless/examples)
- [Azure Functions Documentation](https://docs.microsoft.com/en-us/azure/azure-functions/)