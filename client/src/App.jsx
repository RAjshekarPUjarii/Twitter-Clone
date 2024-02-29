import { Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/SharedLayoutHome";
import Bookmarks from "./pages/Bookmarks";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import MainSection from "./components/main-section/MainSection";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home>
            <MainSection />
          </Home>
        }
      />
      <Route
        path="/explore"
        element={
          <Home>
            {" "}
            <Explore />
          </Home>
        }
      />
      <Route
        path="/notifications"
        element={
          <Home>
            <Notification />
          </Home>
        }
      />

      <Route
        path="/bookmarks"
        element={
          <Home>
            <Bookmarks />
          </Home>
        }
      />

      <Route
        path="/Profile"
        element={
          <Home>
            <Profile />
          </Home>
        }
      />
    </Routes>
  );
}

export default App;
