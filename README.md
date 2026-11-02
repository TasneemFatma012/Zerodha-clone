# Nexora Trading Platform

This repository contains the complete trading platform workspace with three main parts working together:

- backend: Node.js + Express + MongoDB API
- dashboard: React trading dashboard UI
- frontend: additional frontend app / landing or client interface

## Project Structure

```bash
zerodha-clone/
├── backend/
│   ├── controllers/
│   ├── model/
│   ├── routes/
│   ├── schemas/
│   ├── .env
│   ├── index.js
│   └── package.json
├── dashboard/
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md (if present)
├── .gitignore
├── README.md
└── package.json (optional root script manager)
```

## How to run together

### 1. Install dependencies

```bash
cd backend
npm install

cd ../dashboard
npm install

cd ../frontend
npm install
```

### 2. Start backend

```bash
cd backend
npm start
```

### 3. Start dashboard

```bash
cd dashboard
npm run dev
```

### 4. Start frontend

```bash
cd frontend
npm run dev
```

## Notes

- The backend provides API endpoints used by the dashboard/frontends.
- Make sure all environment variables are configured inside each app's `.env` file.
- This repository is now set up as a single monorepo workspace so you can work on all three apps together.

## Recommended next step

If you want, we can also add a root `package.json` with scripts like:

```bash
npm run backend
npm run dashboard
npm run frontend
```

so that everything can be started together from one command.
