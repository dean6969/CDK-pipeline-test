import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import {pipelines} from 'aws-cdk-lib';


export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
      synth: new pipelines.ShellStep('Synth', {
        // Use a connection created using the AWS console to authenticate to GitHub
        // Other sources are available.
        input: pipelines.CodePipelineSource.connection('dean6969/CDK-pipeline-test', 'main', {
        connectionArn: 'arn:aws:codestar-connections:us-east-1:905418068543:connection/d8ee606c-46ee-4633-bea5-69939aa0fc81', // Created using the AWS console * });',
        }),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });

    ///////////////////////////////////
    PrimaryOutputDirectory: 'cdk.out'

  }
}
