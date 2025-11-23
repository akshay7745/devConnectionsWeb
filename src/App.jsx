import About from "./components/About";
import { Body } from "./components/Body";
import DashboardHome from "./components/DashboardHome";
import DashboardLayout from "./components/DashboardLayout";
import DashboardSettings from "./components/DashboardSettings";
import Home from "./components/Home";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="settings" element={<DashboardSettings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
