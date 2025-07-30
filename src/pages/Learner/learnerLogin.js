import React from 'react';
import Login from './Login';

function App() {
  const handleLogin = (user) => {
    console.log('Logged in user:', user);
    // Redirect or update state accordingly
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
