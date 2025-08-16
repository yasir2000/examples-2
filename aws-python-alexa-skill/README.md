<!--
title: 'AWS Serverless Alexa Skill example in Python'
description: 'This example demonstrates how to setup your own Alexa skill using AWS Lambdas.'
layout: Doc
framework: v1
platform: AWS
language: Python
priority: 10
authorLink: 'https://github.com/rupakg'
authorName: 'Rupak Ganguly'
authorAvatar: 'https://avatars0.githubusercontent.com/u/8188?v=4&s=140'
-->

# AWS Serverless Alexa Skill example in Python

This example demonstrates how to setup your own Alexa skill using AWS Lambdas.

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
serverless invoke local --function luckyNumber
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

### View logs

View function logs:
```bash
serverless logs --function luckyNumber
```

Tail logs in real-time:
```bash
serverless logs --function luckyNumber --tail
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

### AWS Specific Issues

- **Region Issues**: Ensure you're deploying to the correct AWS region
- **IAM Permissions**: Check that your AWS credentials have necessary IAM permissions
- **VPC Configuration**: If using VPC, ensure proper subnet and security group configuration

## Additional Resources

- [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)
- [AWS Provider Documentation](https://www.serverless.com/framework/docs/providers/aws/)
- [Serverless Examples Repository](https://github.com/serverless/examples)