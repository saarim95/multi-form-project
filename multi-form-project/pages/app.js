import { useState } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "shadcn";

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider attribute="class">
      <div className={darkMode ? "dark" : ""}>
        <header className="p-4 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Multi-Step Form
            </h1>
            <button
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>
        <main className="container mx-auto p-4">
          <Component {...pageProps} />
        </main>
        <footer className="p-4 bg-gray-100 dark:bg-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            &copy; 2024 Multi-Step Form Project
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
