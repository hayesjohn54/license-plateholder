import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link, 
  ReviewForm
} from 'react-router-dom';
import Navigation from "./Navigation";
import UserContainer from "./UserContainer"
import './App.css';
import ReviewContainer from "./ReviewContainer";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

if(!user) return <Login setUser={setUser} />

  return (
    <div className="App">
      <Navigation  user={user} setUser={setUser} />
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace/>} />
        <Route path="users" element={<UserContainer />} />
        <Route path="reviews" element={<ReviewContainer />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
