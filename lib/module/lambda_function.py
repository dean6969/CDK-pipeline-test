import json

def lambda_handler(event, context):
    # Print the event to the logs of the Lambda function, which can be viewed in CloudWatch
    print("Received event: " + json.dumps(event, indent=2))

    # Respond back with a simple message and the received event
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps({
            'message': 'Hello from your Lambda function!',
            'input': event
        })
    }
