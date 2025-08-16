<!--
title: 'GCF Simple HTTP Endpoint example in Ruby'
description: This example demonstrates how to setup a simple Ruby HTTP GET endpoint on GCP Cloud Functions.
layout: Doc
framework: v1
platform: 'Google Cloud'
language: Ruby
priority: 10
authorLink: 'https://github.com/colemanja91'
authorName: 'Allie Coleman'
authorAvatar: 'https://avatars.githubusercontent.com/u/2940547?v=4s=140'
-->

# GCF Simple HTTP Endpoint example in Ruby

This example demonstrates how to use Serverless Framework with Ruby on GOOGLE.

## Use Cases

- REST API backend
- Microservices architecture
- Serverless application development

## Prerequisites

- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) installed
- [AWS CLI](https://aws.amazon.com/cli/) configured (if using AWS)
- Valid cloud provider credentials configured
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
serverless invoke local --function simpleGet
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

Once deployed, you can test the HTTP endpoints:
```bash
curl https://your-api-gateway-url/dev/endpoint
```

### View logs

View function logs:
```bash
serverless logs --function simpleGet
```

Tail logs in real-time:
```bash
serverless logs --function simpleGet --tail
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
- [GOOGLE Provider Documentation](https://www.serverless.com/framework/docs/providers/google/)
- [Serverless Examples Repository](https://github.com/serverless/examples)