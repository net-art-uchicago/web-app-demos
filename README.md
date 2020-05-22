# Chatroom
## socket API

![screenshot](screenshot.png)

This web app builds on all of the previous apps and adds an additional form of communication between the client and server called [Sockets](https://socket.io), rather than simply sending HTTP requests between the client and server, a socket maintains an open connection between both client and server so that either can communicate with the other at any time. this allows for functionality that wouldn't be possible with a REST API (like creating a chat room!).
