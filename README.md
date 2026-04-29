# Sports Management System Documentation

## Overview
The Sports Management System is designed to streamline management processes for sports teams, coaching staff, and athletes. This comprehensive system covers multiple functionalities, ensuring ease of use and efficiency.

## Setup Instructions
### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (v4 or higher)
- **Git**

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/josephbryantbo/sports-management-system.git
   cd sports-management-system
   ```
2. Install the required packages:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and define the necessary environment variables:
   ```
   DATABASE_URI=<your_mongo_db_uri>
   PORT=5000
   JWT_SECRET=<your_jwt_secret>
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
### Authentication
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Authenticate a user

### User Management
- **GET /api/users** - Retrieve all users
- **GET /api/users/:id** - Retrieve a user by ID
- **PUT /api/users/:id** - Update user details
- **DELETE /api/users/:id** - Delete a user

### Teams
- **POST /api/teams** - Create a new team
- **GET /api/teams** - Retrieve all teams
- **GET /api/teams/:id** - Retrieve a team by ID
- **PUT /api/teams/:id** - Update team information
- **DELETE /api/teams/:id** - Delete a team

### Events
- **POST /api/events** - Create a new event
- **GET /api/events** - Retrieve all events
- **GET /api/events/:id** - Retrieve event by ID
- **PUT /api/events/:id** - Update an event
- **DELETE /api/events/:id** - Delete an event

## Database Schema
### Users
- **_id**: ObjectId
- **name**: String
- **email**: String (unique)
- **password**: String (hashed)
- **role**: String (admin/user)

### Teams
- **_id**: ObjectId
- **name**: String
- **members**: Array of UserId
- **created_at**: Date

### Events
- **_id**: ObjectId
- **teamId**: ObjectId
- **event_date**: Date
- **description**: String

## Features
- User registration and authentication
- Team management
- Event scheduling and management
- API integration for frontend use

## Deployment Guide
1. Set up a cloud server (e.g., AWS, DigitalOcean).
2. Install Node.js and MongoDB on the server.
3. Push your local code to the remote repository.
4. Clone the repository on your server:
   ```bash
   git clone https://github.com/josephbryantbo/sports-management-system.git
   cd sports-management-system
   npm install
   ```
5. Set environment variables and start the server using a process manager (like PM2 or Docker).
6. Ensure to configure your firewall and security groups to allow traffic on the specified ports.

## License
This project is licensed under the MIT License. For more details, check the LICENSE file in the repository.