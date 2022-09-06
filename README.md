# Bill Manager App

 Bill Manager is a frontend application I created using React for use with a backend called Bill Manager App API.
 
 You can see Bill Manager in action [here](). Please bear in mind that it may take a few moments to load the data from the API because it is deployed to Heroku and may be hibernating.

--------------------------------------------
## User Stories

* I can create a bill (Create Bill).
* I can view a list of bills (Read Bills).
* I can edit a bill (Edit Bill).
* I can view a bill (Read Bill).
* I can delete a bill (Delete Bill).

--------------------------------------------

## Technologies Used for Bill Manager:

* React.js
* Axios
* Bootstrap
* React-Bootstrap
* Heroku

--------------------------------------------
## How to Install Bill Manager locally:

* Fork and clone this repository to your machine
* Change into the new directory
* Run npm install:

```
$ npm i

```
* Open another terminal tab, and run npm run start

```
$ npm run start

```

* A browser window will open, and you're all set.

<br>

* Seed the database locally :

```
$ http://localhost:3001/seed

```
You will see bills on the main page. You can edit, delete, and create your own. 

--------------------------------------------
## How to Seed Bill Manager App :

* Seed the database:
```
$ https://bill-manager-api.herokuapp.com/seed

```
--------------------------------------------
## Challenges During this Project

My original goal for Bill Manager was to make this a fullstack application. Since I would like to teach myself other frontend applications, I decided to keep the frontend and backend separate, using the backend as an API for any frontend.

I decided to use React because I wanted to know the framework well. It was part of the cirriculum at PerScholas and a requirement for Project 3. This project was my opportunity to create a React application from start to finish. 

I decided to build a backend application with Node, Mongoose, Cors, and Express, which you can view [here](https://github.com/danielmorris710/budget_api).


--------------------------------------------
## Future Plans for Bill Manager App API:

A goal is to use this API for other separate front end applications, as it is now, but with full CRUD capabilities regardless of the front end application.

I want to make pop-ups to both add and edit bills.

I also want to add user authentication so anyone can log in and see their own bills. On top of that I would like to build out a way for people to send bills via email or SMS.