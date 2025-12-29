/**import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from "cors";

// Import Routes
import projectRoutes from './routes/projectsRoutes.js';
import skillsRoutes from './routes/skillsRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';

/**const app = express();
// Enable CORS for all routes
app.use(cors({
  origin: "http://localhost:5173", // allow frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed HTTP methods
  credentials: true // if you need cookies/auth
}));
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://shenalmanelka.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/users', userRoutes);

// MongoDB connection
const mongoURI = 'mongodb+srv://shenalmanelka774_db_user:0dAcTLkyXJRWcO8Z@cluster0.ttp6txb.mongodb.net/?appName=Cluster0';
mongoose.connect(mongoURI) // no options needed
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));**/

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// Load env variables
dotenv.config();

// Import Routes
import projectRoutes from './routes/projectsRoutes.js';
import skillsRoutes from './routes/skillsRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';

// ✅ CREATE APP (this was missing)
const app = express();

// Middleware
app.use(bodyParser.json());

// CORS (Local + Vercel frontend)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://shenalmanelka.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/users', userRoutes);

// Health check (important for Render)
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// MongoDB connection (ENV VARIABLE)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

