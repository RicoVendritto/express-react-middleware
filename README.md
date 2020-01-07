# Business Card Middleware

This repository is a near clone of last night's [Express React Homework](https://git.generalassemb.ly/sei-nyc-cheetahs/express-react-middleware) repo. 

We're going to take your homework from last night and:

- add `morgan` and `body parser`, 
- add a middleware that simply logs `Hello, world!` when you visit the `localhost:3000/people` route (hint: don't forget `next()`), and
- add a form on the front end to create a new user and send that data to the back end.

PLEASE NOTE:

IF you use the same repo as last night's homework for tonight's, *you will get a permanent incomplete on that homework.* DO NOT DO THIS.
IF your homework from last night is incomplete, you need to finish that before doing tonight's homework.

![gif](https://media3.giphy.com/media/KEQzTcbdIvyaA/source.gif)

Please follow these instructions closely:

1. Fork & clone this repo.
2. `cd` into the repo.
3. Duplicate & move two files from last night's *completed* homework into this repo– `index.js` and `package.json`. 
  - Ensure you do *not* delete these files from last night's repo.
4. Run `npm i`.
5. Run `node resetDb` and `node seed`.
6. Run `npx create-react-app client`.
7. Run `npm i axios`.
8. Duplicate & move one file from last night's *completed* homework into this repo– `app.js`. 
  - Ensure you do *not* delete this file from last night's repo.
9. Finish this homework.
10. Create a new pull request on this repo.
