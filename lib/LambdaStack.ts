import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

interface LambdaStackProps extends StackProps {
    stageName?: string; // Optional stageName property
}

export class LambdaStack extends Stack {
    constructor(scope: Construct, id: string, props: LambdaStackProps) {
        super(scope, id, props);

        // Example usage of props.stageName
        // You can add your specific Lambda function configuration here
    }
}