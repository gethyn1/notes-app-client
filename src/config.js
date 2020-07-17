export default {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "gethyn-serverless-notes-app-uploads"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://s34p7jime6.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_ujMQAxQXB",
    APP_CLIENT_ID: "1crkvn4preorsopn15ng9g2b7e",
    IDENTITY_POOL_ID: "eu-west-2:8faba72f-e666-4a15-b670-0ab8c522b583"
  }
};
