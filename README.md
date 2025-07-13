# Leaderboard App - Full Stack (React + Node.js + MongoDB)
A real-time leaderboard application that:

Tracks user points

Displays top 10 rankings

Allows adding new users

Stores all data in MongoDB

🌐 Live Demo
Frontend: https://leader-task.netlify.app

Backend: https://leaderboard-app-woad.vercel.app

✨ Features
✅ User Management

Add new users via form

Select existing users from dropdown

✅ Points System

Claim random points (1-10) per user

Persistent point history tracking

✅ Real-time Leaderboard

Displays top 10 users by points

Auto-updates when points are claimed

✅ Modern UI

Built with React + Tailwind CSS

Fully responsive design

🛠 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios for API calls

Backend

Node.js

Express

MongoDB (Atlas)

CORS configured for secure access

🚀 Deployment
Frontend

Hosted on Netlify

Environment variables for API URL

Backend

Hosted on Vercel

MongoDB Atlas cloud database

🔧 Installation (Local Development)
Clone the repo

bash
git clone https://github.com/yourusername/leaderboard-app.git
cd leaderboard-app
Backend Setup

bash
cd backend
npm install
echo "MONGO_URI=your_mongodb_connection_string" > .env
npm start
Frontend Setup

bash
cd frontend
npm install
echo "VITE_API_URL=http://localhost:5000" > .env
npm run dev
📝 Notes
Requires Node.js v16+

MongoDB Atlas free tier works perfectly

All API endpoints documented in backend/routes/

📬 Contact
For support or questions:
📧 sayyubchishty40@gmail.com
