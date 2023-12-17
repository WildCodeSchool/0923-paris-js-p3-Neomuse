import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <body>
      <Navbar />
      <Outlet />
      <Footer />
    </body>
  );
}

export default App;
