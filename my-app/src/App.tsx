import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Frontend de React con Backend de Flask</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
