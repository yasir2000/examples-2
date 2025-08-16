<!--
title: 'GCF Simple HTTP Endpoint example in Python'
description: This example demonstrates how to setup a simple python HTTP GET endpoint on GCP Cloud Functions. When you ping the endpoint we've set up you'll see the time returned for the given request type.
layout: Doc
framework: v1
platform: 'Google Cloud'
language: Python
priority: 10
authorLink: 'https://github.com/sebito91'
authorName: 'Sebastian Borza'
authorAvatar: 'https://avatars0.githubusercontent.com/u/3159454?v=4&s=140'
-->

# GCF Simple HTTP Endpoint example in Python

This example demonstrates how to use Serverless Framework with Python on GOOGLE.

## Use Cases

- REST API backend
- Microservices architecture
- Serverless application development

## Prerequisites

- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed
- [Google Cloud SDK](https://cloud.google.com/sdk) installed and configured
- Valid Google Cloud credentials configured
- [Python](https://python.org/) (version 3.6 or higher)
- pip package manager

## Installation

Install dependencies:

```bash
pip install -r requirements.txt
```

## Local Development

### Test individual functions

Test a function locally:
```bash
serverless invoke local --function currentTime
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
serverless logs --function currentTime
```

Tail logs in real-time:
```bash
serverless logs --function currentTime --tail
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
- [Google Cloud Functions Documentation](https://cloud.google.com/functions/docs)