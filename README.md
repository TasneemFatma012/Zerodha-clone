# Nexora Trading Platform

This monorepo contains the complete trading platform workspace with three connected apps:

- backend: Node.js + Express + MongoDB API
- dashboard: trading dashboard UI
- frontend: marketing and auth landing app

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
│   ├── package.json
│   └── README.md
├── dashboard/
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── README.md
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── node_modules/
```

## Start everything together

From the root folder:

```bash
npm run dev
```

This runs:
- backend on port 5000
- dashboard on port 5173
- frontend on port 3000

## Start apps individually

### Backend
```bash
cd backend
npm install
npm start
```

### Dashboard
```bash
cd dashboard
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Environment variables

### Backend
```bash
PORT=5000
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>
```

### Dashboard
```bash
VITE_API_URL=http://localhost:5000
```

### Frontend
```bash
REACT_APP_DASHBOARD_URL=http://localhost:5173
```

## Notes
- Frontend login/signup redirects the user into the dashboard app.
- Dashboard depends on backend APIs for holdings, orders, positions, funds, and user auth.
- Backend must be connected to MongoDB for full functionality.

## License
For educational and demo use.
