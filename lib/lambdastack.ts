import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

interface LambdaStackProps extends StackProps {
    stageName?: string; // Optional stageName property
}

export class LambdaStack extends Stack {
    constructor(scope: Construct, id: string, props: LambdaStackProps) {
        super(scope, id, props);

        // Example usage of props.stageName
        // You can add your specific Lambda function configuration here

        // Define a new Lambda function with Python runtime
        const exampleLambda = new lambda.Function(this, 'lambda_function', {
            code: lambda.Code.fromAsset('./module/hello.py'),  // Adjust the path to your Python code
            handler: 'hello.lambda_handler',  // Assumes your Python handler is named 'lambda_function.py' with a function 'lambda_handler'
            runtime: lambda.Runtime.PYTHON_3_9,  // Python 3.9 runtime
            environment: {  // Optional environment variables
                STAGE: props.stageName || 'dev'
            }
        });
        
            
    }
}
