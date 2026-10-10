# REST API User Management System

A simple REST API project built with **Node.js and Express.js**, featuring a separate frontend built with HTML, CSS, and JavaScript. This project was created for learning and practicing REST API development and CRUD operations.

## Live Demo

- **Frontend:** [REST API User Management](https://restapi-1-f9s9.onrender.com/)
- **Backend API:** [REST API Server](https://restapi-4bnb.onrender.com)
- **Get All Users:** [View Users JSON](https://restapi-4bnb.onrender.com/users)

## Features

- Fetch and display all users.
- Update a user's username and email using their ID.
- Delete a user by ID.
- Display user data in a table.
- Separate frontend and backend deployments.
- Communicate with the backend using HTTP requests.

## Technologies Used

**Backend**
- Node.js
- Express.js
- REST API
- UUID

**Frontend**
- HTML5
- CSS3
- JavaScript
- Fetch API

**Deployment**
- Render
- GitHub

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | Retrieve all users |
| POST | `/users` | Create a new user |
| PUT | `/users/:id` | Update a user by ID |
| DELETE | `/users/:id` | Delete a user by ID |

### Base URL

```text
https://restapi-4bnb.onrender.com
```

### Example Requests

**Get all users**
```http
GET https://restapi-4bnb.onrender.com/users
```

**Update a user**
```http
PUT https://restapi-4bnb.onrender.com/users/USER_ID
Content-Type: application/json
```

Request body:

```json
{
  "username": "Mehedi Hasan Lemon",
  "email": "mehedi@example.com"
}
```

**Delete a user**
```http
DELETE https://restapi-4bnb.onrender.com/users/USER_ID
```

Replace `USER_ID` with an actual user ID returned by the API.

## Project Structure

```text
RESTapi/
├── controller/
├── frontend/
│   └── index.html
├── models/
├── routes/
├── views/
├── .gitignore
├── app.js
├── index.js
├── package.json
└── package-lock.json
```

## Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/MehediHL/RESTapi.git
```

**2. Navigate to the project directory**

```bash
cd RESTapi
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the server**

```bash
node index.js
```

**5. Open the API**

```text
http://localhost:4000/users
```

Open `frontend/index.html` using VS Code Live Server to use the frontend locally. Ensure the frontend's API URL and the backend's CORS settings are configured for local development.

## Learning Objectives

Through this project, I practiced:

- Creating REST API endpoints with Express.js.
- Implementing CRUD operations.
- Handling route parameters and request bodies.
- Generating unique IDs with UUID.
- Connecting a frontend to a backend using the Fetch API.
- Deploying a backend Web Service and a frontend Static Site on Render.
- Managing project changes with Git and GitHub.

## Notes

- This is a learning and practice project, not a production-ready application.
- User data is currently managed in memory, so changes may be lost when the server restarts.
- Authentication, authorization, and database persistence are not implemented.

## Author

**Mehedi Hasan Lemon**

GitHub: [MehediHL](https://github.com/MehediHL)
