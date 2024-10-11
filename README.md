# Chat App

## Introduction

**Chat App** is a real-time messaging application built with a **Node.js** backend using **Socket.io** for real-time communication and **MongoDB** for storing user and message data. The frontend is developed with **React.js**, providing an interactive and responsive user interface. Users can log in and participate in group chats, enabling communication with multiple people at once.

![Login Screen](https://raw.githubusercontent.com/duchuyvo0368/ChatApp/refs/heads/master/images/snappy_login.png)
![Chat Screen](https://raw.githubusercontent.com/duchuyvo0368/ChatApp/refs/heads/master/images/snappy.png)

## Features

- **Real-time Chat**: Utilizes **Socket.io** to enable live messaging between users in real-time.
- **Login System**: Users can securely log in with their credentials to access the chat.
- **Group Chat**: Multiple users can chat together in the same room, facilitating group conversations.
- **Persistent Chat History**: Messages are stored in **MongoDB**, allowing users to view past conversations when they log back in.

## Backend: Node.js & Socket.io

The backend is powered by **Node.js** and uses **Socket.io** to handle real-time communication between clients. The server manages user sessions, message broadcasting, and stores all data in a **MongoDB** database.

### Key Technologies

- **Node.js**: For server-side logic.
- **Socket.io**: For real-time, bi-directional communication between clients and the server.
- **Express.js**: Supports HTTP methods and middleware creating an incredibly powerful and easy-to-use API
- **MongoDB**: For storing user profiles and message history.

## Frontend: React.js

The frontend is built with **React.js**, providing a modern and responsive interface for users to log in, view contacts, and chat with others. It communicates with the backend to fetch and send messages in real time.

### Key Technologies

- **React.js**: For building the user interface.
- **Axios**: For making HTTP requests to the backend API for login and other operations.

## How to Run the Project

### Backend (Node.js)

1. Clone the repository.
2. Navigate to the `backend` folder.
3. Install dependencies and run the project:
   ```bash
   npm install
   npm start
