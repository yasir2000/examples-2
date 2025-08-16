<!--
title: 'Ruby LINE bot'
description: 'This example shows you how to create a LINE bot using Ruby.'
framework: v1
platform: AWS
language: Ruby
priority: 10
authorLink: 'https://github.com/knugie'
authorName: 'Wolfgang Teuber'
authorAvatar: 'https://avatars0.githubusercontent.com/u/1446195?v=4&s=140'
-->

# Ruby LINE bot

This example shows you how to create a LINE bot using Ruby.

## Use Cases

- REST API backend
- Microservices architecture
- Serverless application development

## Prerequisites

- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed
- [AWS CLI](https://aws.amazon.com/cli/) configured
- Valid AWS credentials configured
- [Ruby](https://ruby-lang.org/) (version 2.7 or higher)
- Bundler gem

## Installation

Install dependencies:

```bash
bundle install
```

## Local Development

### Test individual functions

Test a function locally:
```bash
serverless invoke local --function webhook
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
serverless logs --function webhook
```

Tail logs in real-time:
```bash
serverless logs --function webhook --tail
```

## Configuration

This service can be configured using environment variables or serverless.yml custom section.

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
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [AWS API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)