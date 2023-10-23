import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import AuthProvider from './providers/AuthProvider';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}>
          <div className={`App ${darkMode ? 'dark' : 'light'}`}>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
            {/* Your other components */}
          </div>
        </RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
