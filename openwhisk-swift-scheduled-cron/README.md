<!--
title: 'OpenWhisk Serverless Scheduled Cron job example in Swift'
description: 'This example demonstrates scheduling a cron job.'
layout: Doc
framework: v1
platform: OpenWhisk
language: Swift
priority: 10
authorLink: 'https://github.com/jthomas'
authorName: 'James Thomas'
authorAvatar: 'https://avatars2.githubusercontent.com/u/2322?v=4&s=140'
-->

# OpenWhisk Serverless Scheduled Cron job example in Swift

This example demonstrates scheduling a cron job.

## Use Cases

- Scheduled tasks and cron jobs
- Background processing
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
serverless invoke local --function cron
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

This function runs on a schedule. Check CloudWatch logs for execution:
```bash
serverless logs --function functionName
```

### View logs

View function logs:
```bash
serverless logs --function cron
```

Tail logs in real-time:
```bash
serverless logs --function cron --tail
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