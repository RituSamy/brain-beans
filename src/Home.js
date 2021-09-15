import { Link } from "react-router-dom";
import LogInButton from "./login/loginbutton";

const Home = ({ logInLink, signUpLink }) => {
  return (
    <div>
      <h1>Brain Beans</h1>

      <Link to={logInLink}>
        <LogInButton title="Log In" />
      </Link>

      <Link to={signUpLink}>
        <LogInButton title="Sign Up" />
      </Link>
    </div>
  );
};

export default Home;
