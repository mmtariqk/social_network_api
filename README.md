## Social Network API using MongoDB

### Description
This is a RESTFUL API app for a social network web application using NoSQL (mongoDB) where users can get all users, share their thoughts, react to friends’ thoughts, and create a friend list as well as delete a friend. This application performs a full fledge CRUD operation. 

### App built in 
The Technologies used in this app are: 
Express.js for routing, a MongoDB database, dotenv to secure sensitive data like passwords and your keys, Mongoose ODM, and Moment.js package to format time.

### Installation & Usage
Clone the repo to your local machine, make sure to install MongoDB <a href="https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&amp;utm_campaign=gs_americas_united_states_search_brand_atlas_desktop&amp;utm_term=%2Binstall%20%2Bmongodb&amp;utm_medium=cpc_paid_search&amp;utm_ad=b&amp;utm_ad_campaign_id=1718986498&amp;gclid=Cj0KCQjw2NyFBhDoARIsAMtHtZ5LlBWhU-XQp1KCC2a74fYkoDZzxTUgwGEbSFkBFei53cHnQJOSkFEaAg9tEALw_wcB" rel="nofollow">website.</a>, install the necessary dependencies, run npm install in your terminal. Finally npm start in your terminal to start the app and sync with mongoose. 


### Application Demo — The meat and potatoes of the app

Demo-1:
https://drive.google.com/file/d/1R11MdrPhwblZy1H79iGzrP9ALPhoV7WU/view

Demo-2:
https://drive.google.com/file/d/1W3AWZiRPVsP3BS94PCvN0iGN7okOzzI2/view

Demo-3:
https://drive.google.com/file/d/1HnEE9ND97mhIctTTApbE3OKrRzr_ypBM/view

Demo-4:
https://drive.google.com/file/d/1kxQjabRL0QCbFy88ZeTPin57q2Uebtq2/view

This app shows the database for a social networking application. API routes are tested through Postman api testing tool.

- GET route to get and return all users and all thoughts
- GET route to get and return a single user and a single thought by ID
- POST route for adding a new user in the MongoDB database
- PUT route for updating a user in the MongoDB database
- DELETE route to delete users from the MongoDB database
- POST route for creating a thought in the MongoDB database
- PUT route for updating a thought in the MongoDB database
- DELETE route to delete a thought from the MongoDB database
- POST route to create a reaction
- DELETE route to remove a reaction
- POST route for adding a friend to a user's friend list
- DELETE route for removing a friend from a user's friend list

### Screenshots
<img width="1376" alt="Screen Shot 2021-06-08 at 9 01 30 AM" src="https://user-images.githubusercontent.com/77028806/121219456-8e890400-c838-11eb-9993-7c51e217ea14.png">

### User Story

```text
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```text
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Postman for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Postman
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Postman
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```!!!
