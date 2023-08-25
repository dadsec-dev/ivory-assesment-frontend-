
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            {/* Default route, you can redirect to Login or show a homepage */}
            <Login />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
