import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./login/login.js";
import SignUp from "./login/SignUp.js";
import Home from "./Home";
import UserHome from "./UserHome";
import Projects from "./Projects";

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/userhome">
          <UserHome />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/">
          <Home logInLink="/login" signUpLink="/signup" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
