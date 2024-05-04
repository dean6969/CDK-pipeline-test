import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import {pipelines} from 'aws-cdk-lib';
import { PipelineStage } from './pipelinestage';
import { BuildSpec } from 'aws-cdk-lib/aws-codebuild';

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    
    const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
      synthCodeBuildDefaults: {
        partialBuildSpec: BuildSpec.fromObject({
            phases: {
                install: {
                    "runtime-versions": {
                        nodejs: "20",
                        python: "3.9"
                    }
                }
            }
        })
    },
      
      synth: new pipelines.ShellStep('Synth', {
        // Use a connection created using the AWS console to authenticate to GitHub
        // Other sources are available.
        input: pipelines.CodePipelineSource.connection('dean6969/CDK-pipeline-test', 'main', {
        connectionArn: 'arn:aws:codestar-connections:us-east-1:905418068543:connection/934c47fd-177e-4eb5-a728-ee19da9616f6', // Created using the AWS console * });',
        }),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
          'pip install -r requirements.txt'
        ],
        primaryOutputDirectory: 'cdk.out'
      }),
      
      
    });

    ///////////////////////////////////

    // Add the test stage to the pipeline
    // Adding the TestStage to the pipeline
    // Adding a testing step directly within the pipeline
    // Add a test stage as an additional step
    const testStage = new pipelines.ShellStep('TestStage', {
      commands: ['chmod +x ./test_pipeline.sh',
                './test_pipeline.sh'
    ]
    });

    // Adding the test stage to the pipeline
    // Add the test step to the pipeline after the synth step
    pipeline.addWave('TestWave', {
      post: [testStage]
    });
    

    
    pipeline.addStage(new PipelineStage(this, 'PipelineTestStage', {
      stageName: 'Dev'
    }));
  }
}
