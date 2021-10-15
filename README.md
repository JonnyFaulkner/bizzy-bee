# Bizzy Bee

## Table of Contents

### User Story

- As a business owner I can sign up or login
- THEN I am presented with an account page
- THEN I see a calendar of MY events in descending order by DATE
- THEN I see upcoming events
- THEN I see a form to POST new events
- WHEN I edit/add to any previous or future POSTS
- THEN I can SUBMIT the UPDATED post
- THEN I see a bill on MY account page
- THEN I am presented with a STRIPE payment platform

- As a user I am presented with a search bar
- THEN I see popular and upcoming carousels filled with cards beneath search bar
- WHEN I click on card, a modal opens with detailed information about event
- THEN I see a review button
- THEN I see a rsvp button
- THEN I see a close button
- WHEN I search city, state I am presented with rows of cards in descending order
- THEN I can click on card and same modal opens

### Up and Running (Mac)
- Run ```npm install``` or ```npm i``` from the root directory to install the dependency 'concurrently'.
- Next run this script ```npm run install``` to tell concurrently to download all necessary dependencies in client and server folder.
- If you want to run the application locally make sure Mongodb is running. Mac users can run ```brew services list``` in your terminal to verify if it's running as a service.
- Start your mongodb server by running ```brew services start mongodb-community@5.0``` in the terminal.
- To stop run ```brew services stop mongodb-community@5.0``` in the terminal.
- To start both servers run ```npm run start``` or ```npm run develop``` and application should now be running. Check package.json for other scripts.