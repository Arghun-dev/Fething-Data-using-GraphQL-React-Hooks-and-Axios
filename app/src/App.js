import { useState,useEffect } from 'react'
import './App.css';

function App() {
  const [data, setData] = useState({ videos: [] })

  useEffect(() => {
    // call GraphQL API
    // update the component state
  }, [])

  return (
    <div className="App">
      <h1>List of videos</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
