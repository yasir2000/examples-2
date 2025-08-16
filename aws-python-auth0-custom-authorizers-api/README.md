<!--
title: 'AWS API Gateway Custom Authorizer Function with Auth0 example in Python'
description: 'This is an example of how to protect API endpoints with Auth0, JSON Web Tokens (jwt) and a custom authorizer lambda function in Python 3.'
layout: Doc
framework: v1
platform: AWS
language: Python
priority: 10
authorLink: 'https://github.com/BrianAndersen78'
authorName: BrianAndersen78
authorAvatar: 'https://avatars3.githubusercontent.com/u/30560831?v=4&s=140'
-->

# AWS API Gateway Custom Authorizer Function with Auth0 example in Python

This is an example of how to protect API endpoints with Auth0, JSON Web Tokens (jwt) and a custom authorizer lambda function in Python 3.

## Use Cases

- REST API backend
- Microservices architecture
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
serverless invoke local --function auth
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
serverless logs --function auth
```

Tail logs in real-time:
```bash
serverless logs --function auth --tail
```

## Configuration

This service can be configured using environment variables or serverless.yml custom section.

### Environment Variables

- `AUTH0_CLIENT_ID`: ${file(./secrets.json):AUTH0_CLIENT_ID}
- `AUTH0_CLIENT_PUBLIC_KEY`: ${file(./public_key)}
- `PYTHONPATH`: /var/runtime:/var/task/vendored

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