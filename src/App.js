import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/Home";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar isHomePage={true} />
      <Outlet />
      <Footer className="footer" />
    </div>
  );
}

export default App;
