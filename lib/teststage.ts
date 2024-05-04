import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ShellStep} from 'aws-cdk-lib/pipelines';
import { StageProps, Stack } from 'aws-cdk-lib';

interface TestStageProps extends StageProps {
    stageName?: string; // Optional stageName property
}

export class TestStage extends Stack {
    constructor(scope: Construct, id: string, props: TestStageProps) {
        super(scope, id, props);

        const runTests = new ShellStep('RunTests', {
            commands: [
                './test_pipeline.sh'
            ]
        });

        // Add more steps or configurations if necessary
    }
}
