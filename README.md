<br/>Project Description: 
<br/>Toddler games is a compilation of 3 games focused on improving the Fine motor skills of children from the age of 4 to 9.
<br/>This project will include the games -
<br/>  Drag and drop shapes
<br/>  Type and pop
<br/>  Stack the bricks
<br/>All three games are focused on developing fine motor skills and concentration in toddlers as well as keeping them entertained. We plan on making a website that runs on Angular. We followed the Agile development process model. We worked parallelly on different modules and integrated every sprint. We had 5 sprints in a total of which 3 of them were focused on the development of the product. We created storyboards in taiga to keep track of the user stories.
<br/>
<br/>This process helps us to split the big epics into user stories and the stories into smaller tasks. The smaller the tasks, the easier it is to develop and debug the issues. We also reused components that are developed by another team member to save time and to follow a uniform design. We made sure we had a running version of the product by the end of each sprint. This helped us to conduct usability studies and find the potential issues that might arise if we continue with the current product. Based on the feedback from the subjects, new user stories are added to the backlog which was taken into consideration based on priority in the next sprint.
<br/>
<br/>Key Requirements:
<br/>  The website should have 3 working games.
<br/>  There must be a login page.
<br/>  There has to be a homepage Menu to choose the games from.
<br/>  Deliverables (CO-5, CO-6):
<br/>  Toddler Ria is a web game. So a website of the running game application is one of the deliverables. We followed the Scrum model so documentation of meeting minutes and Project reports are part of every deliverable.
<br/>
<br/>Implemented Features  
<br/>The following are the features of Toddler Games:
<br/>  Login- Users can login using a username and password if they already have an account.
<br/>  Register - Users can register themselves to make an account.
<br/>  View stats - logged in users can view stats for all 3 games
<br/>  Play games - Users can play the 3 games available. 
<br/>  These games have a help button for instructions
<br/>  A reset button to reset the game
<br/>  And a back button to go back to the Homepage
<br/>  Profile button - There is also a profile button that will show the profile of the logged-in user.
<br/>  Upload pictures - Users can upload a picture for their profile on the profile page.
<br/>
<br/>
<br/>User Manual
<br/>To set up the project follow the below steps.
<br/>Project Setup:
<br/>To setup project, first, the system needs to have installed Node.js JavaScript
<br/>runtime and npm installed.
<br/>Using the following command you can check if the system has Node and npm:
<br/>node --version
<br/>npm --version
<br/>If it’s not installed on the system, install it from https://nodejs.org/en/download/
<br/>
<br/>Install Angular CLI - It’s an IDE to work with the Angular project.
<br/>npm install -g @angular/cli
<br/>Download zip from Git: https://github.com/rnmehta1/ToddlerGames
<br/>Unzip the files, open the command prompt where you have extracted the files.
<br/>
<br/>
<br/>In the command prompt use the following command to open the Visual Studio IDE:
<br/>code.
<br/>The project uses following Angular packages:
<br/># http-server - https://www.npmjs.com/package/http-server
<br/>npm install --global http-server
<br/># Bootstrap
<br/>npm i --save angular-bootstrap-md 
<br/>npm i --save font-awesome 
<br/>npm i --save hammerjs
<br/># cdk
<br/>npm i @angular/cdk --save
<br/># graphs
<br/>npm install apexcharts ng-apexcharts --save
<br/>Project Execution:
<br/>Open the command prompt where your project files are.
<br/>To run the project locally or to test if all the packages are installed correctly you can use the following command: (It will run on port 4200 by default).
<br/>ng serve
<br/>
<br/>And you can later access the application at  http://localhost:4200/ in a browser.
<br/>
<br/>
<br/>
<br/>
<br/>Project Deployment
<br/>Firebase deployment
<br/>Install Firebase package using the following command in CLI
<br/>ng add @angular/fire
<br/>To build the deployable project.
<br/>ng build --prod
<br/>To deploy it on Firebase and then you will get a link to access the application in the command prompt
<br/>ng deploy
<br/>(It will ask you to create an account on Firebase or you can use the existing account and later can create a new project on Firebase to use it for Angular project deployment)
<br/>
<br/>Issues
<br/>Screen compatibility with mobile/small screen devices.
<br/>GIFs visibility after deployment.
<br/>There is no backend connected to our game. So the stats are only valid for that session.
<br/>Application isn’t tested with toddlers.
<br/>
<br/>Possible Solution:
<br/>For screen compatibility icons, png, and gif sizes are needed to be proportionally resized with respect to the screen.
<br/>FireBase project specifications or different web-app deployment platforms which will support gifs.
<br/>Storing stats to the database.
<br/>
<br/>Outlook
<br/>The team has a vision for this application. Here are some features we would like to see implemented.
<br/>Set Up a backend for the game.
<br/>Develop more games for the App
<br/>Develop more levels for the existing games.
<br/>Have a way to add friends so that you can compare scores.
<br/>
<br/>
<br/>Youtube link : click here
<br/>
