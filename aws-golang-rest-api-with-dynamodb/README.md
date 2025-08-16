<!--
title: 'aws-golang-rest-api-with-dynamodb'
description: 'Boilerplate code for Golang CRUD Operations'
framework: v1
platform: AWS
language: Go
priority: 10
authorLink: 'https://github.com/gsweene2'
authorName: 'Garrett Sweeney'
authorAvatar: 'https://avatars.githubusercontent.com/u/14845943?s=400&u=6d79e8f042cd3d30643ba4598515cae24be69ec3&v=4'
-->

# aws-golang-rest-api-with-dynamodb

Boilerplate code for Golang CRUD Operations

## Use Cases

- REST API backend
- Microservices architecture
- Serverless application development

## Prerequisites

- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed
- [AWS CLI](https://aws.amazon.com/cli/) configured (if using AWS)
- Valid cloud provider credentials configured
- [Go](https://golang.org/) (version 1.x)
- Go modules enabled

## Installation

Install dependencies:

```bash
go mod tidy
```

Or if using dep (legacy):
```bash
dep ensure
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

- `DYNAMODB_TABLE`: ${self:service}-${opt:stage, self:provider.stage}

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