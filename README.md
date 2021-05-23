# ReactNativeBookRecords
React Native project for keeping track of books;

I've created this app for myself to keep track of the books I own. You can login and create an account.
Currently you can Scan and add books by barcode to add to your owned books list and search by book title to add books to your TBR.

Technology used:
- React Native
- Expo 
- Google books Api Open Library API
- AWS Amplify
  - Cognito for authentication 
  - DynamoDB with AppSync and a GraphQL API

<img src="./assets/images/readme/Book Details.jpg" width="30%"/>  <img src="./assets/images/readme/Owned Books.jpg" width="30%"/> <img src="./assets/images/readme/To Read.png" width="30%"/>

## Installation
clone this repository
```javascript
git clone https://github.com/BBennettChiba/ReactNativeBookRecords.git
```
install dependencies
```javascript
npm install
```
install the expo cli
```javascript
npm install --global expo-cli
```
install the expo go app on your smartphone for testing.

### Serverless Backend on AWS Amplify
You'll need to set up your own backend. In my case, I used AWS Amplify. You'll have to set up an account and configure your settings. What you'll need for the schema

#### Amplify CLI
Install the amplify cli
```javascript
npm install -g @aws-amplify/cli
```

#### Cognito setup
The two main components of Amazon Cognito are user pools and identity pools. You'll have to create an AWS account. After you signed in through a user pool, you'll recieve user pool tokens. And you can exchange it for AWS credentials through an identity pool. Then, you can access other AWS services such as DynamoDB.

#### GraphQL setup
Turn off automerge conflict detection: In the terminal use ```amplify configure``` and when prompted for conflict detection select 'Optimistic Concurrency'.

Push the schema to amplify: Since the schema is already defined in the source code. You can push to AWS using the Amplify CLI ```amplify push```

## Using Expo
With expo installed, you can run ```npm start``` and run the app on the expo server. You can use the QR code to run it on a phone through Expo Go or run in the web browser.

I recommend running on your smartphone through the Expo Go app so you know if the app is working properly or not. Or you could use an emulator. This has not been tested on an iPhone

## Build
To build, simply run ```expo build:android``` or ```expo build:ios```. 
Once the build has been created, you can update it with ```expo publish```.
