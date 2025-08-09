import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", margin: 24 }}>
      <header style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <strong>BeOne</strong>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Feed</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main style={{ marginTop: 24 }}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}
