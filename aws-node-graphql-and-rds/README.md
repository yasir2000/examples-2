<!--
title: 'A Simple Serverless GraphQL API for MySQL, Postgres and Aurora'
description: 'This is an example project that uses 3 RDS databases to illustrate the differences between using each of them'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/chief-wizard'
authorName: 'Chief Wizard'
authorAvatar: 'https://avatars3.githubusercontent.com/u/40777040?v=4&s=140'
-->

# A Simple Serverless GraphQL API for MySQL, Postgres and Aurora

This is an example project that uses 3 RDS databases to illustrate the differences between using each of them

## Use Cases

- REST API backend
- Microservices architecture
- Serverless application development

## Prerequisites

- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed
- [AWS CLI](https://aws.amazon.com/cli/) configured (if using AWS)
- Valid cloud provider credentials configured
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- npm or yarn package manager

## Installation

Install dependencies:

```bash
npm install
```

Or using yarn:
```bash
yarn install
```

## Local Development

### Test individual functions

Test a function locally:
```bash
serverless invoke local --function graphql
```

### Run with local development server

Start local development server:
```bash
serverless offline
```

Note: You may need to install serverless-offline plugin:
```bash
npm install --save-dev serverless-offline
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
serverless logs --function graphql
```

Tail logs in real-time:
```bash
serverless logs --function graphql --tail
```

## Configuration

This service can be configured using environment variables or serverless.yml custom section.

### Environment Variables

- `AURORA_HOST`: ${self:custom.AURORA.HOST}
- `AURORA_PORT`: ${self:custom.AURORA.PORT}
- `MYSQL_HOST`: ${self:custom.MYSQL.HOST}
- `MYSQL_PORT`: ${self:custom.MYSQL.PORT}
- `POSTGRESQL_HOST`: ${self:custom.POSTGRESQL.HOST}
- `POSTGRESQL_PORT`: ${self:custom.POSTGRESQL.PORT}
- `DB_NAME`: ${self:custom.DB_NAME}
- `USERNAME`: ${self:custom.USERNAME}
- `PASSWORD`: ${self:custom.PASSWORD}

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