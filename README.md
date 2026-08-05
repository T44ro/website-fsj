# Web FSJ

Full-stack web application for FSJ consisting of a Node.js Express backend and a React (Vite) frontend.

## Prerequisites

Node.js (v18 or higher) and npm are required.

### Installing Node.js and npm

#### Windows
1. Download the LTS installer from [nodejs.org](https://nodejs.org/).
2. Run the `.msi` file and follow the wizard. Ensure **Add to PATH** is selected.
3. Open Command Prompt or PowerShell and verify:
   ```cmd
   node -v
   npm -v
   ```

#### macOS
- **Option 1 (Official Installer):** Download the `.pkg` installer from [nodejs.org](https://nodejs.org/) and run it.
- **Option 2 (Homebrew):**
  ```bash
  brew install node
  ```
Verify installation:
```bash
node -v
npm -v
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install -y nodejs npm
```
Verify installation:
```bash
node -v
npm -v
```

---

## Repository Structure

- `backend/` - Express.js REST API
- `frontend/` - React frontend built with Vite

---

## Local Setup Instructions

### Step 1: Set up and start the Backend

1. Open terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The backend server will run at `http://localhost:5000`.

---

### Step 2: Set up and start the Frontend

1. Open a new terminal window or tab and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend application will run at `http://localhost:5173`. Open this URL in your browser.

---

## Available Scripts

### Backend (`/backend`)
- `npm run dev` - Runs `index.js` using `nodemon` for auto-reloading.

### Frontend (`/frontend`)
- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the application for production.
- `npm run preview` - Serves the production build locally.
- `npm run lint` - Runs ESLint.
