import { Stack, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as path from 'path';

interface LambdaStageProps extends StageProps {
    env?: string; // Optional env property
}

export class LambdaStack extends Stack {
    constructor(scope: Construct, id: string, props: LambdaStageProps) {
        super(scope, id, props);

        // Example usage of props.env
        // You can add your specific Lambda function configuration here
        const lambdaCodePath = path.join(__dirname, 'module', 'lambda_function.zip');

        // Define a new Lambda function with Python runtime
        const exampleLambda = new lambda.Function(this, 'lambda_function', {
            functionName: 'lambda_function_${props.env}',  // Function name will be 'lambda_function_dev' or 'lambda_function_prod
            code: lambda.Code.fromAsset(lambdaCodePath),  // Adjust the path to your Python code
            handler: 'lambda_function.lambda_handler',  // Assumes your Python handler is named 'lambda_function.py' with a function 'lambda_handler'
            runtime: lambda.Runtime.PYTHON_3_9,  // Python 3.9 runtime
            environment: {  // Optional environment variables
                STAGE: props.env || 'dev'
            }
        });
        
            
    }
}
