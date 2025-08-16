<!--
title: 'AWS Simple HTTP Endpoint example in Java'
description: 'This example demonstrates how to setup a simple HTTP GET endpoint using Java. Once you fetch it, it will reply with the current time.'
layout: Doc
framework: v1
platform: AWS
language: Java
priority: 10
authorLink: 'https://github.com/DoWhileGeek'
authorName: 'Joeseph Rodrigues'
authorAvatar: 'https://avatars3.githubusercontent.com/u/1767769?v=4&s=140'
-->

# AWS Simple HTTP Endpoint example in Java

This example demonstrates how to setup a simple HTTP GET endpoint using Java. Once you fetch it, it will reply with the current time.

## Use Cases

- REST API backend
- Microservices architecture
- Serverless application development

## Prerequisites

- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed
- [AWS CLI](https://aws.amazon.com/cli/) configured (if using AWS)
- Valid cloud provider credentials configured
- [Java](https://openjdk.java.net/) (version 8 or higher)
- [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/)

## Installation

Install dependencies:

```bash
mvn clean install
```

Or using Gradle:
```bash
./gradlew build
```

## Local Development

### Test individual functions

Test a function locally:
```bash
serverless invoke local --function currentTime
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
serverless logs --function currentTime
```

Tail logs in real-time:
```bash
serverless logs --function currentTime --tail
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