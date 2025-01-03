import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { ResponsiveAppBar } from "./components/AppBar";
import { Footer } from "./pages/Footer";
import { SnackbarProvider } from "./context/SnackbarContext";
import "./App.css";

function App() {
  return (
    <SnackbarProvider>
      <div className="app-container">
        <BrowserRouter>
          <ResponsiveAppBar />
          <main className="main-content">
            <AppRouter />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </SnackbarProvider>
  );
}

export default App;
