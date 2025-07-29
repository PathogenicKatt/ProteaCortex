import { useState, useEffect } from 'react';
import LogTable from './components/LogTable';

function App() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/logs')
      .then(res => res.json())
      .then(data => {
        setLogs(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Security Dashboard</h1>
      {loading ? <p>Loading...</p> : <LogTable logs={logs} />}
    </div>
  );
}

export default App;