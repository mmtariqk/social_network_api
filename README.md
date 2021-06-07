## Social Network API using MongoDB

### Description
This is a RESTFUL API app for a social network web application using mongoDB (Nosql) where users can get all users, share their thoughts, react to friends’ thoughts, and create a friend list as well as delete a friend. This application performs a full fledge CRUD operation. 

### App built in 
The Technologies used in this app are: 
Express.js for routing, a MongoDB database, dotenv to secure sensitive data like passwords and your keys, Mongoose ODM, and Moment.js package to format time.

### Installation & Usage
Clone the repo to your local machine, install the necessary dependencies, run npm install in your terminal. Finally npm start in your terminal to start the app and sync with mongoose. 

### Application Demo - meat and potatoes of the app
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
```









