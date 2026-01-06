***

# CreatorFlow - Professional Task & Content Management System

CreatorFlow is a modern, responsive **task and content management dashboard** built using **React**, **Tailwind CSS**, and a **Node.js/NestJS backend**. It enables creators and businesses to manage tasks efficiently, gain insights from analytics, and maintain a clean workflow through an elegant dashboard UI.

***
![CreatorFlow Dashboard](http://raw.githubusercontent.com/Iresh-Nimantha/CreatorFlowAssignment/refs/heads/main/Screenshot%202026-01-06%20193430.png?token=GHSAT0AAAAAADJ4J4FYVNCMWT5CO5K6U3GK2K5DAKQ)
![CreatorFlow Dashboard](https://raw.githubusercontent.com/Iresh-Nimantha/CreatorFlowAssignment/refs/heads/main/Screenshot%202026-01-06%20193410%20-%20Copy.png?token=GHSAT0AAAAAADJ4J4FZSG3M3AZHVEZIO5FQ2K5DB7A)

## 🚀 Features

- **Dashboard Overview:** Clean analytics panel with real-time task statistics.  
- **Task Management:** Fully-featured CRUD (create, read, update, delete) operations.  
- **Floating Task Form:** Sleek popup form for adding or editing tasks.  
- **Responsive UI:** Glassmorphic interface with adaptive components for all devices.  
- **Reusable Components:** Comprehensive reusable elements for maintainable design.  
- **Backend API:** RESTful endpoints with secure MongoDB connection.  

***

## 🧰 Tech Stack

**Frontend:**
- React 18  
- Tailwind CSS  
- Lucide React / React Icons  
- Axios  

**Backend:**
- NestJS 
- MongoDB  
- TypeScript  
- REST API  

***

## 📁 Project Structure

### Frontend

```
frontend/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Sidebar.jsx
│  │  ├─ StatsDashboard.jsx
│  │  ├─ AnalyticsPanel.jsx
│  │  ├─ TaskForm.jsx
│  │  ├─ TaskList.jsx
│  │  ├─ FloatingTaskForm.jsx
│  │  └─ StatusBadge.jsx
│  ├─ hooks/
│  │  └─ useTasks.js
│  ├─ App.jsx
│  └─ index.js
├─ package.json
└─ tailwind.config.js
```

### Backend

```
backend/
├─ src/
│  ├─ modules/
│  │  └─ tasks/
│  │     ├─ tasks.controller.ts
│  │     ├─ tasks.service.ts
│  │     ├─ tasks.module.ts
│  │     └─ dto/
│  │        ├─ create-task.dto.ts
│  │        └─ update-task.dto.ts
│  ├─ main.ts
│  └─ app.module.ts
├─ package.json
├─ tsconfig.json
└─ .env
```

***

## ⚙️ Setup Instructions

### Backend Setup

1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/your-username/creatorflow-backend.git
   cd creatorflow-backend
   npm install
   ```

2. **Create and configure environment variables**
   ```bash
   # .env
   PORT=5098
   DATABASE_URL=mongodb://localhost:27017/creatorflow
   JWT_SECRET=your-secret-key
   ```

3. **Run the backend server**
   ```bash
   npm run start:dev
   ```

4. The backend runs at **http://localhost:5098**

***

### API Endpoints

| Method | Endpoint        | Description        |
|--------|-----------------|--------------------|
| GET    | `/tasks`        | Get all tasks      |
| POST   | `/tasks`        | Create a new task  |
| PUT    | `/tasks/:id`    | Update a task      |
| DELETE | `/tasks/:id`    | Delete a task      |

***

### Frontend Setup

1. **Clone and install**
   ```bash
   git clone https://github.com/your-username/creatorflow-frontend.git
   cd creatorflow-frontend
   npm install
   ```

2. **Add environment variable**
   ```bash
   # .env
   VITE_API_URL=http://localhost:5098
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. App available at **http://localhost:5173** (default Vite port)

***

## 🧩 Usage

### Dashboard
- Shows real-time task analytics (total, completed, pending).  
- Components: `StatsDashboard`, `AnalyticsPanel`.  

### Tasks
- View all tasks in a glassmorphic dashboard view.  
- Add new tasks with **FloatingTaskForm**.  
- Edit using the pencil icon (prefilled popup).  
- Delete using the trash icon.  
- Change task status via the **StatusBadge**.

***

## 💻 Development Notes

- **New Components:** Add under `src/components/`.  
- **API Integration:** Handled by the custom hook `useTasks.js`.  
- **Styling:** Implemented with Tailwind CSS and glassmorphism.  
- **Backend Logic:** Located entirely within `src/modules/tasks`.  
- **Testing:** You can add test frameworks like Jest or Vitest for unit testing.

***


Ensure `.env` includes production database credentials.

### Frontend
Build and deploy:
```bash
npm run build
```

***

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch  
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add new feature"
   ```
4. Push and submit a pull request  
   ```bash
   git push origin feature/my-feature
   ```

***

## 📜 License

Distributed under the **MIT License**.  
See [LICENSE](https://chat.openai.com/c/LICENSE) for details.

***

## 💡 Acknowledgements

- [React](https://reactjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Lucide React](https://lucide.dev/)  
- Inspired by modern productivity dashboards and minimalist design systems.

***
