# Leaderboard App - Full Stack (React + Node.js + MongoDB)

A real-time leaderboard application that tracks user points, displays rankings, and stores data in MongoDB.

## 🌐 Live Demo

- **Frontend**: [https://leader-task.netlify.app](https://leader-task.netlify.app)
- **Backend**: [https://leaderboard-app-woad.vercel.app](https://leaderboard-app-woad.vercel.app)

## ✨ Features

### ✅ User Management
- Add new users via form
- Select existing users from dropdown

### ✅ Points System
- Claim random points (1-10) per user
- Persistent point history tracking

### ✅ Real-time Leaderboard
- Displays top 10 users by points
- Auto-updates when points are claimed

### ✅ Modern UI
- Built with React + Tailwind CSS
- Fully responsive design

## 🛠 Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios for API calls

**Backend**
- Node.js
- Express
- MongoDB (Atlas)
- CORS configured for secure access

## 🚀 Deployment

**Frontend**
- Hosted on Netlify
- Environment variables for API URL

**Backend**
- Hosted on Vercel
- MongoDB Atlas cloud database

## 🔧 Installation (Local Development)

1. Clone the repo
```bash
git clone https://github.com/yourusername/leaderboard-app.git
cd leaderboard-app
cd backend
npm install
echo "MONGO_URI=your_mongodb_connection_string" > .env
npm start

# Frontend Setup
cd frontend
npm install
echo "VITE_API_URL=http://localhost:5000" > .env
npm run dev
