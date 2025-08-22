# React To-Do List App 📝

A simple and minimal **To-Do List application** built with **React + Tailwind CSS**.  
It allows users to add, delete, and toggle tasks, with **localStorage persistence**, along with live **date and time display**.

---

## 🚀 Features
- ➕ Add new tasks
- ❌ Delete tasks
- ✅ Mark tasks as complete/incomplete
- 💾 Persistent storage using `localStorage`
- ⏰ Real-time clock & date display
- 🎨 Styled with Tailwind CSS for a clean modern look

---

## 📂 Project Structure
```
src/
│── assets/
│   └──All pngs/logo    # All assects
│── components/
│   ├── List.jsx        # Main To-Do List component
│   └── Todo.jsx        # Individual Todo item component
│── App.js              # App entry point
│── index.js            # React DOM renderer
```

---

## ⚙️ Installation & Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```

---

## 🛠️ Usage
- Type a task in the input field and click **ADD +**.
- Click on a task to toggle **complete/incomplete**.
- Use the ❌ delete button to remove a task.
- Tasks are **saved automatically** in `localStorage`.

---

## 📸 UI Overview
- **Header** → App title + Logo + Date & Time  
- **Input Field** → Add new task  
- **Task List** → Display tasks with toggle & delete options  

---

## 🧰 Technologies Used
- **React (Hooks + useState + useEffect)**
- **Tailwind CSS**
- **localStorage API**

---

## 📌 Future Enhancements
- ✨ Task editing option
- 🔍 Filter tasks (All, Completed, Pending)
- 📱 Responsive design improvements
- 🌙 Dark/Light mode toggle

---

## 📝 License
This project is open-source and free to use for learning and development purposes.
