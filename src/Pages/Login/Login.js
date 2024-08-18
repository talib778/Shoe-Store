import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="flex items-center justify-center p-32 h-screen">
    <div className='flex flex-col px-32 py-16 bg-gray-300 shadow-lg shadow-blue-400'>
      <h1 className="text-4xl mb-4 font-semibold mb-14">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 w-[400px] border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border w-[400px] border-gray-300 rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className='flex items-center justify-center'><button
        onClick={handleLogin}
        className="bg-[#c72092] text-white w-[150px] hover:bg-pink-900 px-4 py-2 rounded mt-4"
      >
        Login
      </button>
      </div>
    </div>
    </div>
  );
};

export default Login;
