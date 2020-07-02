README
# Simple WebRTC Messenger

A tutorial on building a WebRTC video chat app using SimpleWebRTC.

FOLDER Structure

simplewebrtc-messenger
├── public
│   ├── images
│   │   └── image.png
│   ├── index.html
│   └── js
│       └── app.js
├── README.md
└── server.js


run command to generate package.json 
npm init -y 

run command to install dependencies
npm install express handlebars jquery semantic-ui-css simplewebrtc

run command
npm start

Open the URL localhost:3000 in your browser and you should see the page with "Simple WebRTC Messanger"

Take the index.html code from here - 
and update index.html file under publc folder

Now Open the file public/js/app.js and add this code:


Installation Steps
Clone repository
Run npm install
Start the server with npm start or node server
Visit http://localhost:3000/
HTTPS is required for remote cameras and remote microphone to work. Currently, there's no known method for creating SSL certificates for a private IP address. You can easily acquire a free SSL certificate for a public domain.

Deployment Steps
If you would like to quickly test out the app on a public domain without dealing with the hassles of setting up SSL, simply deploy they app with now.sh

Clone repository
Run npm install
Run npm install -g now
Deploy the server with now --public. Follow the printed out instructions
Visit the url provided
Enter room name and username, click 'Create Room'
Invite a friend or use another device with a front camera, visit the url. Give another name but provide the same room name
Remote videos should show up on both videos. You can also send chat which also works without video
If the video stutters or freezes, it's probably due to the slow upload speeds given by your ISP.

License
Open License








