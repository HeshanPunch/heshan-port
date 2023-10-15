import * as cdk from 'aws-cdk-lib';
import {App, GitHubSourceCodeProvider, RedirectStatus} from '@aws-cdk/aws-amplify-alpha';
import { Construct } from 'constructs';
import { BuildSpec } from 'aws-cdk-lib/aws-codebuild';




export class FrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new App(this, 'Amplify-heshanpunch', {
      appName: 'heshanpunch NextJS app from CDK',
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: 'HeshanPunch',
        repository: 'heshan-port',
        oauthToken: cdk.SecretValue.secretsManager('github-token'),
      }),
      autoBranchDeletion: true,
      // customRules: [
      //   {
      //     source: '/<*>',
      //     target: '/.next/server/app/index.html', //'/index.html',
      //     status: RedirectStatus.NOT_FOUND_REWRITE,
      //   },
      // ],
      // environmentVariables:{},
      // buildSpec: BuildSpec.fromObjectToYaml({
      //   version: 1,
      //   frontend: {
      //     phases: {
      //       preBuild: {
      //         commands: ['echo PRE yarn HELLOOOOOOOOOOOOOOOOOOOOOO🚀','cd frontend', 'pwd', 'yarn'],
      //       },
      //       build: {
      //         commands: ['echo PRE BUILD HELLOOOOOOOOOOOOOOOOOOOOOO🚀','pwd','yarn build'],
      //       },
      //     },
      //     artifacts: {
      //       commands: ['echo PRE baseDirectory 🚀🚀', 'pwd'],
      //       baseDirectory: 'frontend/.next',
      //       files: ['**/*'],
      //     },
      //     cache: {
      //       paths: ['node_modules/**/*'],
      //     },
      //   },
      // }) 
      
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
