"use client"

// Import useEffect to set the authentication state in local storage
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from './login.module.css';

const Page = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (password === "gdsctoch123") {
      // Simulate setting an authentication token
      localStorage.setItem('authToken', 'true');
      router.push('/admin');
    } else {
      localStorage.setItem('authToken', 'false');
      console.log("Incorrect password");
    }
  };


  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Page;
