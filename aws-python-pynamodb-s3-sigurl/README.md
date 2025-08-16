<!--
title: 'AWS Serverless REST API with DynamoDB store and presigned URLs example in Python 3.6.'
description: 'This example demonstrates how to setup a RESTful Web Service allowing you to create, list, get, update and delete Assets. DynamoDB is used to store the data.'
layout: Doc
framework: v1
platform: AWS
language: Python
priority: 10
authorLink: 'https://github.com/bedge'
authorName: 'Bruce Edge'
authorAvatar: 'https://avatars1.githubusercontent.com/u/499317?v=4&s=140'
-->

# AWS Serverless REST API with DynamoDB store and presigned URLs example in Python 3.6.

This example demonstrates how to setup a RESTful Web Service allowing you to create, list, get, update and delete Assets. DynamoDB is used to store the data.

## Use Cases

- REST API backend
- Microservices architecture
- File processing and transformation
- Event-driven data processing
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
serverless invoke local --function create
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

This function is triggered by S3 events. Upload a file to the configured bucket to trigger execution.

### View logs

View function logs:
```bash
serverless logs --function create
```

Tail logs in real-time:
```bash
serverless logs --function create --tail
```

## Configuration

This service can be configured using environment variables or serverless.yml custom section.

### Environment Variables

- `DYNAMODB_TABLE`: ${self:custom.dynamodb_table}
- `DYNAMODB_HOST`: ${self:custom.dynamodb_host}
- `REGION`: ${self:custom.region}
- `S3_BUCKET`: ${self:custom.s3_bucket}
- `S3_KEY_BASE`: ${self:custom.s3_key_base}
- `URL_DEFAULT_TTL`: ${self:custom.url_default_ttl}

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