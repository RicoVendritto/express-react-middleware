# Business Card Middleware

This repository is a near clone of last night's [Express React Homework](https://git.generalassemb.ly/sei-nyc-cheetahs/express-react-middleware) repo. 

We're going to take your homework from last night and:

- add `morgan` and `body parser`, 
- add a middleware that simply logs `Hello, world!` when you visit the `localhost:3000/people` route (hint: don't forget `next()`), and
- add a form on the front end to create a new user and send that data to the back end.

<br>

PLEASE NOTE:

- IF you use the same repo as last night's homework for tonight's, *you will get a permanent incomplete on that homework.* Don't do that.
- IF your homework from last night is incomplete, *you need to finish that before doing tonight's homework.*

![gif](https://media3.giphy.com/media/KEQzTcbdIvyaA/source.gif)

<br>

Please follow these instructions closely and in precise order:

1. Fork & clone this repo.
2. `cd` into the repo.
3. Duplicate & move two files from last night's *completed* homework into this repo– `index.js` and `package.json`. 
  * Ensure you do *not* delete these files from last night's repo.
4. Run `npm i`.
5. Run `node resetDb` and `node seed`.
6. Run `npx create-react-app client` and `cd` into `client`.
7. Run `npm i axios`.
8. Duplicate & move one more file from last night's *completed* homework into this repo– `app.js`. 
  * Ensure you do *not* delete this file from last night's repo.
  * Ensure you place the `app.js` in the correct folder, overwriting the native React's app's `app.js`.
9. Finish this homework by completing all three steps listed in the beginning of the `README.md`.
10. Create a new pull request on this repo.
