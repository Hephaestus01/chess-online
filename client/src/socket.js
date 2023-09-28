import { io } from "socket.io-client"; // import connection function

// Replace 'localhost:8080' with your AWS server's public IP address or domain name
const socket = io('https://secure-gorge-17081-6eba02744539.herokuapp.com/'); // initialize websocket connection

export default socket;