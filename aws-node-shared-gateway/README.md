<!--
title: 'Shared AWS API Gateway with multiple Node Lambdas'
description: 'A sample of implementing shared API gateway with multiple Node Lambdas'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
priority: 10
authorLink: 'https://github.com/allanchua101'
authorName: 'Allan Chua'
authorAvatar: 'https://avatars3.githubusercontent.com/u/26626798?s=460&v=4'
-->

# Shared AWS API Gateway with multiple Node Lambdas

A sample of implementing shared API gateway with multiple Node Lambdas

## Use Cases

- Serverless application development

## Prerequisites

- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed
- [AWS CLI](https://aws.amazon.com/cli/) configured (if using AWS)
- Valid cloud provider credentials configured

## Installation

Install dependencies:

# No additional installation steps required

## Local Development

### Test individual functions

Test a function locally:
```bash
serverless invoke local --function functionName
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
serverless logs --function functionName
```

Tail logs in real-time:
```bash
serverless logs --function functionName --tail
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
- [UNKNOWN Provider Documentation](https://www.serverless.com/framework/docs/providers/unknown/)
- [Serverless Examples Repository](https://github.com/serverless/examples)