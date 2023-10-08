import * as cdk from 'aws-cdk-lib';
import {App, GitHubSourceCodeProvider} from '@aws-cdk/aws-amplify-alpha';
import { Construct } from 'constructs';




export class FrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const amplifyApp = new App(this, 'Amplify-heshanpunch', {
    //   appName: 'heshanpunch NextJS app from CDK',
    //   sourceCodeProvider: new GitHubSourceCodeProvider({
    //     owner: 'HeshanPunch',
    //     repository: props.repository,
    //     oauthToken: SecretValue.secretsManager(props.githubOauthTokenName),
    //   }),
    //   autoBranchDeletion: true,
    // })

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
