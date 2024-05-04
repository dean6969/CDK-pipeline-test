import { Stage, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaStack } from './LambdaStack.ts';


export class PipelineStage extends Stage {
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);
    
        new LambdaStack(this, 'LambdaStack', {
            stageName: props.stageName
        });
    }
}