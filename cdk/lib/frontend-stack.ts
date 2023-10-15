import * as cdk from 'aws-cdk-lib';
import {App, GitHubSourceCodeProvider, RedirectStatus} from '@aws-cdk/aws-amplify-alpha';
import { Construct } from 'constructs';
import { BuildSpec } from 'aws-cdk-lib/aws-codebuild';




export class FrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new App(this, 'Amplify-heshanpunch', {
      appName: 'heshanpunch app from CDK',
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: 'HeshanPunch',
        repository: 'heshan-port',
        oauthToken: cdk.SecretValue.secretsManager('github-token'),
      }),
      autoBranchDeletion: true,
     
      
    })

    amplifyApp.addBranch('main', {
      stage: 'PRODUCTION',
    })

    new cdk.CfnOutput(this, 'appId', {
      value: amplifyApp.appId,
    })

    // const bucket = new s3.Bucket(this, 'WebsiteBucket', {
    //   bucketName: 'heshanpunch-nextjs-bucket' // Choose your own bucket name here
    // });

    // console.log('🤖 Made Bucket', bucket.bucketName);

    // const queue = new sqs.Queue(this, 'CdkQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });

    // const topic = new sns.Topic(this, 'CdkTopic');

    // topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
