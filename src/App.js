import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: task, completed: false },
    ]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#111827",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "40px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <div style={appStyle}>
      {/* Theme Switcher */}
      <h1>Theme Switcher + To-Do App</h1>

      <p>
        Current Theme: <strong>{theme}</strong>
      </p>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <hr style={{ margin: "30px 0" }} />

      {/* To-Do App */}
      <h2>To-Do List</h2>

      <input
        type="text"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      {/* Filters */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <ul style={{ marginTop: "10px" }}>
        {filteredTasks.map((t) => (
          <li
            key={t.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
              textDecoration: t.completed ? "line-through" : "none",
              transition: "all 0.3s ease", // bonus animation
            }}
          >
            <span
              onClick={() => toggleTask(t.id)}
              style={{ cursor: "pointer" }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
