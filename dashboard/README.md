# Nexora Dashboard

This is the main trading dashboard for the Nexora platform. It displays portfolio holdings, positions, orders, funds, and analytics for the user.

## Tech Stack
- React
- Vite
- React Router
- Axios
- Recharts
- Material UI
- CSS

## Features
- Holdings table
- Positions overview
- Orders and fund panels
- Summary cards with P&L
- Analytics section
- App detail views
- Responsive dashboard layout

## Project Structure
```bash
dashboard/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── index.jsx
├── public/
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Prerequisites
- Node.js 18+
- npm
- Backend API running

## Installation
```bash
cd dashboard
npm install
```

## Environment Variables
Create a `.env` file inside the dashboard folder:

```bash
VITE_API_URL=http://localhost:5000
```

If your backend is deployed on another host, replace it with that URL.

## Run locally
```bash
npm run dev
```

The app usually runs on:
```bash
http://localhost:5173
```

## API Integration
The dashboard expects the backend API to expose endpoints such as:
- `/holdings`
- `/positions`
- `/orders`
- `/funds`
- `/apps`
- `/users`

## Routes
```bash
/login
/signup
/
/analytics
/more
/apps/:id
```

## Screenshots

### Dashboard app preview
![Dashboard preview](./public/logo.png)

> This project does not currently include captured dashboard screenshots in the repo. You can replace the image above with your own app screenshots stored in `dashboard/public/` for a more polished GitHub preview.

## Notes
- The dashboard is designed to work with the main backend API.
- If the backend is unavailable, some sections may appear empty or fallback to demo data.
- The frontend landing app redirects to this dashboard after login/signup.

## License
For educational and demo use.
