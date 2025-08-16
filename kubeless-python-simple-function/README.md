<!--
title: 'Kubeless Serverless Simple function example in Python'
description: 'This example demonstrates a simple function example in Python.'
layout: Doc
framework: v1
platform: Kubeless
language: Python
priority: 10
authorLink: 'https://github.com/andresmgot'
authorName: Andres
authorAvatar: 'https://avatars0.githubusercontent.com/u/4025665?v=4&s=140'
-->

# Kubeless Serverless Simple function example in Python

This example demonstrates a simple function example in Python.

## Use Cases

- Serverless application development

## Prerequisites

- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed
- [AWS CLI](https://aws.amazon.com/cli/) configured (if using AWS)
- Valid cloud provider credentials configured
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
- [KUBELESS Provider Documentation](https://www.serverless.com/framework/docs/providers/kubeless/)
- [Serverless Examples Repository](https://github.com/serverless/examples)