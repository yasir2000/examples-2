<!--
title: 'OpenWhisk Serverless Boilerplate example in Go'
description: 'This example shows a Serverless boilerplate in Go.'
layout: Doc
framework: v1
platform: OpenWhisk
language: Go
priority: 10
authorLink: 'https://github.com/jthomas'
authorName: 'James Thomas'
authorAvatar: 'https://avatars2.githubusercontent.com/u/2322?v=4&s=140'
-->

# OpenWhisk Serverless Boilerplate example in Go

This example shows a Serverless boilerplate in Go.

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
serverless invoke local --function greeting
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
serverless logs --function greeting
```

Tail logs in real-time:
```bash
serverless logs --function greeting --tail
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
- [OPENWHISK Provider Documentation](https://www.serverless.com/framework/docs/providers/openwhisk/)
- [Serverless Examples Repository](https://github.com/serverless/examples)