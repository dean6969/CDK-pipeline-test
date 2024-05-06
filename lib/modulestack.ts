import { Stack, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as path from 'path';
import {env} from './variable';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';



interface moduleStackProps extends StageProps {
    stageName?: string; //Optional stageName property
}

export class moduleStack extends Stack {
    constructor(scope: Construct, id: string, props: moduleStackProps) {
        super(scope, id, props);

        // Example usage of props.stageName
        // You can add your specific Lambda function configuration here
        const lambdaCodePath = path.join(__dirname, 'module', 'lambda_function.zip');

        // Define a new Lambda function with Python runtime
        const exampleLambda = new lambda.Function(this, 'lambda_function', {
            functionName: `lambda_function_${env}`,  // Function name will be 'lambda_function_dev' or 'lambda_function_prod
            code: lambda.Code.fromAsset(lambdaCodePath),  // Adjust the path to your Python code
            handler: 'lambda_function.lambda_handler',  // Assumes your Python handler is named 'lambda_function.py' with a function 'lambda_handler'
            runtime: lambda.Runtime.PYTHON_3_9,  // Python 3.9 runtime
            environment: {  // Optional environment variables
                env: env || 'dev'
            }
        });
        
        const bucket = new s3.Bucket(this, `qbcc-snowflake-${env}-bicb`, {
            bucketName: `qbcc-snowflake-${env}-bicb`,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
           
            });
            
    }
}
