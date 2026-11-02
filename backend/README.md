# Nexora Trading Platform API

This is the backend service for the Nexora trading platform. It provides REST APIs for user auth, portfolio data, orders, positions, funds, and app metadata.

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv
- CORS

## Features
- User signup and login
- User profile lookup
- Holdings API
- Positions API
- Orders API
- Funds API
- Apps/market metadata APIs
- CORS-enabled API for frontend/dashboard access

## Project Structure
```bash
backend/
├── controllers/
│   ├── userController.js
│   ├── holdingController.js
│   ├── statsController.js
│   └── ...
├── model/
│   ├── UserModel.js
│   ├── HoldingModel.js
│   └── ...
├── routes/
│   ├── users.js
│   ├── holdings.js
│   ├── positions.js
│   ├── orders.js
│   ├── funds.js
│   └── ...
├── schemas/
│   └── ...
├── utils/
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Prerequisites
- Node.js 18+
- MongoDB database connection
- Working `.env` file

## Installation
```bash
cd backend
npm install
```

## Environment Variables
Create a `.env` file inside the backend directory:

```bash
PORT=5000
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database-name>
```

If you are using a local MongoDB instance, use the local connection string instead.

## Run the API
```bash
npm start
```

The server will run on:
```bash
http://localhost:5000
```

## Main API Endpoints
```bash
POST /users/signup
POST /users/login
GET /users/profile

GET /holdings
GET /positions
GET /orders
GET /funds
GET /apps
GET /market
```

## Notes
- The backend is expected to be used by the dashboard and landing frontend applications.
- If the MongoDB connection is not configured correctly, the API will fail to start or will not respond properly.
- Always validate user input before production use.

## Troubleshooting
### MongoDB connection issues
Check:
- `.env` file is present
- `MONGO_URL` is correct
- database IP is whitelisted if using MongoDB Atlas

### CORS errors
Ensure frontend/dashboard origins are allowed in `index.js`.

## License
For educational and demo use.
