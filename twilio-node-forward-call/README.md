<!--
title: 'Twilio Forward a Call'
description: 'This example projects helps you deploy a serverless function to the Twilio runtime. The function responds the TwiML configuration to forward phone call.'
framework: v1
platform: Twilio
language: nodeJS
priority: 10
authorLink: 'https://github.com/stefanjudis'
authorName: 'Stefan Judis'
authorAvatar: 'https://avatars3.githubusercontent.com/u/962099?v=4&s=140'
-->

# Twilio Forward a Call

This example projects helps you deploy a serverless function to the Twilio runtime. The function responds the TwiML configuration to forward phone call.

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
serverless invoke local --function forward-call
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
serverless logs --function forward-call
```

Tail logs in real-time:
```bash
serverless logs --function forward-call --tail
```

## Configuration

This service can be configured using environment variables or serverless.yml custom section.

### Environment Variables

- `0`: $
- `1`: {
- `2`: e
- `3`: n
- `4`: v
- `5`: :
- `6`: T
- `7`: W
- `8`: I
- `9`: L
- `10`: I
- `11`: O
- `12`: _
- `13`: R
- `14`: U
- `15`: N
- `16`: T
- `17`: I
- `18`: M
- `19`: E
- `20`: _
- `21`: E
- `22`: N
- `23`: V
- `24`: ,
- `25`:  
- `26`: '
- `27`: d
- `28`: e
- `29`: v
- `30`: '
- `31`: }

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
- [TWILIO Provider Documentation](https://www.serverless.com/framework/docs/providers/twilio/)
- [Serverless Examples Repository](https://github.com/serverless/examples)