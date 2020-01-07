# Business Card App
You're going to build the `index.js` file of an Express back end, setting up an endpoint that will respond with a list of people. 

Then, you're going to build a simple React app that hits that back end and maps the data to the browser.

Let's get started!

## Back End
#### Getting Started
Let's start off by making our backend with Express.js. Most of the necessary starter code has been provided.

1. Fork and Clone this repository
2. `cd` into it
3. run `npm install` to download the necessary dependencies (nodemon and cors)
4. run `npm install pg` and `npm install sequelize` to add those to your app as well.

>Note: This app has been set up to work with the `people_db` database from [the intro to sequelize lesson](https://git.generalassemb.ly/sei-nyc-cheetahs/sequelize-intro). If you don't already have this database, you'll need to run `createdb people_db` before the next step. If you've already created it in class, you will not need to run that line.

5. run `node resetDb` and `node seed` 
6. Open your code with `code .`

#### index.js
The other files in our Express app have been provided, so we'll only need to build out our `index.js` file. There are currently two lines there: `const { Person } = require('./models');` and `const cors = require('cors')`. Leave them there, you'll need them later.

Beneath those lines, add the Express boilerplate as described in [the intro to Express lesson](https://git.generalassemb.ly/sei-nyc-cheetahs/Express-Intro).

#### setting up a route
As we know, the basic structure of an endpoint for a `get` request in Express is `app.get('/', (req, res) => { /* */ })`. We also learned that you could set up an endpoint to respond with JSON with `res.json({/* some data */})`. 

Let's combine that knowledge with what we learned about in our intro to Sequelize, where we could get a list from a database and store it to a value, for example: `const records = await Record.findAll()`

1. Add an `app.get` route where the endpoint is `/people`.
2. Turn the function that that endpoint fires off into an asynchronous function.
3. Write a Sequelize query to get **all** of the people in the database and store that value to a variable called `people`.
4. Set up a JSON response that responds with that list of people.

#### adding cors
We haven't done this yet, so we'll walk you through it. Cors was already installed to your app when you ran `npm install`, and it's been required in the starter code at the top of `index.js`.

All you need to do is add the line `app.use(cors())` directly beneath the line `const app = express();` in your boilerplate express code.

#### test your backend
In the terminal, run `npm start`. Go to `http://localhost:3000/people`. If you've set everything up correctly, you should see a bunch of JSON listing the people from your database.

Leave the server running, and open a new tab in your terminal to deal with the front end (still in the main project folder).

Great job!

## Front End
#### Getting Started
Now let's hit our endpoint with a front end application.

1. *Inside* your main project folder, run `npx create-react-app client`. 
>Note: Generally speaking, front end applications don't have to be inside the main project folder that contains the backend. We're just doing that here because it will be easier to submit everything. That said, this is a totally viable structure.

2. `cd` into `client` and run `npm install axios`.
3. run `npm start` to launch your front end application. It should automatically ask you if you'd like to launch on port 3001. Type `y` to approve.

>Note: You won't need to open another window in VS Code. Since your client folder is inside the main project folder, you should now see it in the project you already have open in VS Code.

#### App.js
We're going to keep this app simple and build everything in App.js.
1. Turn App.js into a class component. Inside of `this.state` we only need one thing: `people: []`
2. Import `axios` at the top of the page.
3. Set up an asynchronous `componentDidMount` function.
4. Within this function, do an `axios.get` request to `http://localhost:3000/people` and save the response to a variable.
5. Console log the response to check that you're getting data. You should be seeing the same JS object that you just saw in the browser at `http://localhost:3000/people`.
6. Use `this.setState()` to update the people array in your state.
7. Inside of the `App.js` return, set up three divs: `<header>`, `<main>`, and `<footer>`.

8. Inside of `<main>`, map through the people array and do the following:
- Put each person in a div
- Put their name in an h2
- Put their company in an h3
- Put their roles and sectors in p tags
(...you might want to add another state variable...apiDataLoaded?...)

9. Add a simple header and footer content and some basic styles. Your end result should look like this [screenshot](/business-cards-app.png).

## Celebrate!
You've built a basic full stack application!

