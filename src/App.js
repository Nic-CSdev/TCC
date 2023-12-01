import "./css/responsive.css";
import { ThemeProvider } from "./js/ThemeContext";
import Footer from "./pages/Footer";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
