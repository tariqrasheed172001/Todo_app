# Todo Application

This is a simple Todo application built with React.js for the frontend, Node.js (Express) for the backend, and MongoDB for database storage.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Features

- Create, read, update, and delete (CRUD) operations for Todo items.
- Separate frontend and backend for modularity.
- MongoDB for data storage.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- MongoDB (Make sure MongoDB is running on your machine or provide a connection URL)
- Git (optional)

## Getting Started

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git

- cd todo-app/client
- npm install

### Backend Setup

- cd todo-app/server
- npm install
    - Create a .env file in the backend directory.
        MONGODB_URI=your-mongodb-connection-url

## Usage
-   cd todo-app/client
    npm start
## Folder Structure

The project structure follows the typical React and Node.js application structure:

- client/: React application source code.
- server/: Node.js (Express) backend source code.