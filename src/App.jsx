import { useState } from 'react'
import './App.css'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={darkTheme ? "app dark" : "app light"}>
      <div className="card">
        <h1>{darkTheme ? '🌙 Dark Mode' : '☀️ Light Mode'}</h1>
        <button onClick={toggleTheme}>Change The Color</button>
      </div>
    </div>
  );
}

export default App;