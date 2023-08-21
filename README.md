Chitter Challenge
=================
This project was meant to be a Twitter clone called "Chitter". Users can: sign up, log in (logout) and then view latest peeps and peep(tweet) themselves. I used MongoDB as a Database to store mock and development data for the project. I created a cluster and within that cluster 2 collections one for testing and one for dev purposes. 

Project Structure:
-------
The project is structured as: backend(server) and frontend(client). For the backend I used: Node, Express, and Mocha & Chai for testing. For the frontend, I used: Vite, React, Axios and Bootstrap.

There is a folder titled "Approach" which holds sample UI snapshots and the a component hierarchy snapshot. To explain it: At the top is the Chitter App, below that is the Homepage and nested within that are the components: Greeting, Header, Footer. Following that, Signup, Login and Peeps which is comprised of: peepcard, addpeep(to post a peep) and peeplist(to display peep feed timeline).

Backend Folder Purposes:
1. Controller: handle HTTP Requests
2. Middleware: host functions that deal with logging, error handling, authentication
3. Models: represent data structure
4. Routes: define endpoints for the API
5. Services: a module that is related to user authentication and registration
6. Server.js : entry point to the application 

Frontend Folder Purposes:
1. Components: UI components separation and for modularity and reusability 
2. Utils: holds utility functions(api calls using axios)
3. Test: to hold the test files for components and api calls. 

Throughout both frontend and backend are mockData.json files for testing user and peep data.

Approach:
-------
First, I created my component hierarchy for my UI components. Component hierarchies help with modularity, maintainability and reusability of components. Then, I worked on the backend structure of the project to ensure I had the server functioning properly. I had to set up a MongoDB and created a cluster and tested sending data to the test collection using tools such as Postman. After setting up the backend and testing to see that it worked properly, I then worked on the frontend and each of the components. Testing, and using axios to make calls to the server. 


Features:
-------

### Standard Acceptance Criteria [x]
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

Additional requirements:[x]
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewright@digitalfutures.com, password123, Ed Wright, edwright6975).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### How to use the webpage

```
** I used Google Chrome when viewing the webpage.You can click on "Inspect" in Dev Tool in the browser and there you can view that there shouldn't be any errors/issues with prop validation etc.



The webpage should be pretty intuitive. There are "Login" and "Sign up" links which are self explanatory. To view the "peeps" without logging in, just click on "Chitter" and it'll redirect you to the "Homepage". However, the ability to "Peep" is not there unless you sign in. Once you've either signed up or logged in, you'll receive an alert letting you know if it was a successful or unsuccessful attempt. 

** If you attempt to create a duplicate account it will tell you that you must "create a unique account". Refresh page afterwards to try again if you're testing this feature **

** If you ONLY want to view the peeps click on "Chitter" which will show only the peeps. **

** If you enter the wrong password, you will not be able to log in. Browser console will log : "User information incorrect." **

Once logged in, you'll see that you now have the ability to peep. There is a salmon colored "Peep" button that you click on once you've written your peep in the 'write your peep here' textbook. 


Once you've posted your peep, you should see your peep feed updated. The header should also reflect that you've logged in, and "logout" should be available. 

Your username and real name, along with timestamp are labeled on the peep. You should take note that this is a very simple application, and once you've "signed up" you'll be redirected to the "login" page and you should enter the login credentials you thought of there. Don't forget your password!


```

### Running the Backend
- Navigate to the `ChitterBackend` folder.
- Run `NODE_ENV=dev npm start`.

### Running the Frontend
- Navigate to the `ChitterFrontend` folder.
- Run `npm run dev`.

### Testing

#### Backend Tests
- Navigate to the `ChitterBackend` folder.
- Run `NODE_ENV=test npm test`.

#### Frontend Tests
- Navigate to the `test` folder inside `ChitterFrontend`.
- Run `npm test`.


### Make sure to:

```
Git clone this project to your local machine and ensure that you use npm install so that all necessary dependencies/packages are installed. 


```

## References:
This project required a lot of time and patience for myself. The materials offered by my instructor(his demos, especially FullStack Engineering & ToDoBackend & Frontend) were incredibly valuable to me and helped me with things I'd never used before such as JWT and bcrypt. This project involved a lot of trial and error.

MDN Web Docs was also quite useful when learning about using localStorage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) which I used in my project. 


I used Canva.com for the Chitter logo image. I used Miro board to compose my Component Hierarchy. 