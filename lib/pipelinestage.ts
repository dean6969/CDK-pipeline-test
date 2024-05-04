import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LambdaStack} from './lambdaStack';

export class PipelineStage extends Stage {
    constructor(scope: Construct, id: string, props: StageProps) {
        super(scope, id, props);
    
        // Now passing a LambdaStackProps object to LambdaStack
        new LambdaStack(this, 'LambdaStack', {
            stageName: props.stageName
        });
    }
}