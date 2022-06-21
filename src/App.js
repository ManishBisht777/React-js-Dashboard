import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profle/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Profile />
    </div>
  );
}

export default App;
