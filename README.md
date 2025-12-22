# My Portfolio

This is a full-stack MERN portfolio application that showcases my projects, skills, and experience.

## Features

- **Home:** A brief introduction and a call to action.
- **About:** More details about my background, skills, and interests.
- **Projects:** A showcase of my work with links to demos and source code.
- **Skills:** A list of my technical skills.
- **Contact:** A form to get in touch with me.

## Technologies Used

### Frontend

- React
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Nodemailer
- Cors
- Dotenv

## Setup and Installation

### Frontend

1. Navigate to the `frontend` directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Backend

1. Navigate to the `backend` directory: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file in the `backend` directory and add the following environment variables:
   - `PORT`
   - `MONGODB_URI`
   - `EMAIL_HOST`
   - `EMAIL_USER`
   - `EMAIL_PASS`
4. Start the development server: `npm run dev`

## Folder Structure

    .
    ├── frontend
    │   ├── public
    │   ├── src
    │   │   ├── assets
    │   │   ├── components
    │   │   └── pages
    │   ├── .gitignore
    │   ├── index.html
    │   ├── package.json
    │   └── vite.config.js
    └── backend
        ├── config
        ├── controllers
        ├── models
        ├── routes
        ├── .gitignore
        ├── package.json
        └── server.js
