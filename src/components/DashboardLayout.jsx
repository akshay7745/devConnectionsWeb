import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}
