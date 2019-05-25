# Phone Catalogue
Your task is to write a very simple product catalogue app.

1. Write a simple REST API in whatever language you're most comfortable (NodeJS, Rails, Java...) that...
 - Has 1 endpoint `/phones`
 - Returns the attached "phones.json" payload (or a free version of it)
 - The data can all be mocked, no need for a persistence layer
2. Write a React app that displays the phones from the API
- Use redux for state management and Axios (or similar library) for fetching data from the API
- Display an initial list with all phones
- When a phone model is selected from the list, it will render a phone detail view displaying a few more details about that phone
- Display a spinner or placeholder component while the API request is ongoing
- Make it look decent. No need for super sophisticated design, but at a minimum, make it somewhat responsive so that it doesn’t look terrible on a mobile phone. Add images for each device.
3. Push the code to a public github repo with a README.md that explains how to run API & Frontend app

## Bonus points
1. Dockerize the app.
2. Write realistic unit/end-to-end tests.


# Installation
1. Clone the repository `git clone https://github.com/raulcontrerasrubio/phone-catalogue.git`
2. Create a .env file on server directory: 
```
PORT=5000
```
## Run app on your local machine
1. Go to server directory and install the dependencies: `npm i`
2. Run the server: `npm run dev` if you are on Ubuntu/MacOS or `npm run dev-windows` if you are on Windows
3. The server is listening on `http://localhost:5000`
4. On another terminal go to client directory and install the dependencies: `npm i`
5. Run the client: `npm start`.
6. The client is listening on port 3000: `http://localhost:3000`

## Run app on Docker
1. Go to the server directory and create a docker image: `sudo docker build -t phone-sev:dev .`
2. Run the server using: `sudo docker run -v ${PWD}:/server -v /server/node_modules -p 5000:5000 --rm phone-sev:dev`
3. On another terminal go to the client directory and create a docker image: `sudo docker build -t telephone:dev .`
4. Run the app using: `sudo docker run -v ${PWD}:/client -v /client/node_modules -p 3000:3000 --rm telephone:dev`
5. The app is on port 5000: `http://localhost:5000`