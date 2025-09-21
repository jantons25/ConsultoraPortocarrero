import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";

export default function MainLayout() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      <Footer />
    </div>
  );
}