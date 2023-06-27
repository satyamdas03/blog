import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";


function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route
          path="/register"
          element={currentUser ? <Homepage /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Homepage /> : <Login />}
        />
        <Route path="/post/:id" element={<Single />} />
        <Route
          path="/write"
          element={currentUser ? <Write /> : <Login />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
      </Routes>
    </Router>
  );
}


export default App;