import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { moduleStack} from './modulestack';


export class PipelineStage extends Stage {
    constructor(scope: Construct, id: string, props: StageProps) {
        super(scope, id, props);
    
        // Now passing a LambdaStackProps object to LambdaStack
        new moduleStack(this, 'LambdaStack', {
            stageName: props.stageName
        });
    }
}