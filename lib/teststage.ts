import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ShellStep} from 'aws-cdk-lib/pipelines';

export class TestStage extends cdk.Stage {
    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        const runTests = new ShellStep('RunTests', {
            commands: [
                './test_pipeline.sh'
            ]
        });

        // Add more steps or configurations if necessary
    }
}
