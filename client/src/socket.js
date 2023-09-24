import { io } from "socket.io-client"; // import connection function

// Replace 'localhost:8080' with your AWS server's public IP address or domain name
const socket = io('http://chess-server-dev.us-west-2.elasticbeanstalk.com'); // initialize websocket connection

export default socket;