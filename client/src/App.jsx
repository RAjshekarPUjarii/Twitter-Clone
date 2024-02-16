import { Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Communities from "./pages/Communities";
import Profile from "./pages/Profile";
import Premium from "./pages/Premium";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/Premium" element={<Premium />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
