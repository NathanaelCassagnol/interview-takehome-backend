# Backend take-home assignment for Amazon Web Services
## Requirements:
### Fork this repository
### Create AWS S3 bucket - GraphQL - Lambda Functions - implement with frontend buttons
### Create utility function for getting all images from S3 bucket
•	Test data is currently supplied from UnSplash - replace with a gallery of all images in your S3 bucket

### Create GraphQL schema on AWS Amplify for Users and Photos
•	Users should have list of Photos they have permission for

### Create function for add button for the user to select a photo from their computer and import it to S3


### Create AWS Lambda functions to give user access to individual photos - check if user has access
•	[Unlock]	Lambda middleware would add photo to list of users unlocked photos

•	[Download]	Lambda middleware would check if user has unlocked photo already - if so would approve download

### Give Download button the ability to download selected photo from the S3 bucket
•	Photo only downloads if user has unlocked it previously

### Document your GraphQl and Lambda Code
•	Inside backend/lambda functions create txt files and paste your lambda functions in for review

•	Inside backend/graphQL create txt files and paste your graphQL schema and API in for review

### Optional (not required but if implemented well would greatly improve your standing)
•	Create CSS or React code that shows whether user owns a photo in the gallery or not

### Final Overview
1.	User logs on to site and all the photos in the S3 bucket load in gallery, locked photos have a red border - unlocked photos a green border
2.	Clicking the add button would let the user select a photo to be added to the gallery - the photo would be added to S3 LOCKED and the gallery would refresh
3.	Clicking Download under photo would Download photo from S3 IFF User has photo unlocked
4.	Clicking Unlock will add photo to user's owned list and change photo border from red to green


## Judging Criteria
•	Cleanliness of your code

•	Shown skill in AWS and React.JS

•	How well your code works against edge cases: no data – user does not own photo - user unlocks multiple times - etc.


#
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

