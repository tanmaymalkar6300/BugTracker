# 🐛 Bug Tracker (React + FastAPI)

This is a simple full-stack bug tracking app I built using **React** for the frontend and **FastAPI** for the backend. It lets users report bugs, assign priority, resolve them, and delete them — kind of like a basic version of a real-world issue tracker.

---

## 🔧 Features

- Add a new bug with title, description, and priority (Low/Medium/High)
- Mark bugs as resolved
- Delete bugs from the list
- View bugs with live update (no page reload)
- REST API with Swagger docs at `/docs`

---

## 🛠️ Tech Stack

- **Frontend**: React, Axios, Vite
- **Backend**: FastAPI, SQLAlchemy, SQLite
- **Other Tools**: CORS middleware, Swagger UI (auto from FastAPI)

---

## 🖥️ How to Run

### 1. Clone the project

```bash
git clone https://github.com/tanmaymalkar6300/bug-tracker
cd bug-tracker
2. Start the Backend (FastAPI)
bash
Copy
Edit
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
Runs at 👉 http://localhost:8000
API docs 👉 http://localhost:8000/docs

3. Start the Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm run dev
Runs at 👉 http://localhost:5173

📁 Folder Structure
bash
Copy
Edit
bug-tracker/
├── frontend/         # React App
├── backend/          # FastAPI App
│   ├── main.py
│   ├── models.py
│   ├── crud.py
│   ├── schemas.py
│   └── database.py

