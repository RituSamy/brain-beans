import NavigationBar from "./NavigationBar";
import Project from "./Project";
import "./Projects.css";
import { Button } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const Projects = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <NavigationBar />
      <h1>My Projects</h1>
      <div className="project-descriptions">
        <div className="project-preview">
          <Link to={`${url}/lemon`}>Lemon</Link>
        </div>

        <div className="project-preview">
          <Link to={`${url}/spring`}>New Spring Project!</Link>
        </div>
      </div>
      <Button>Create a New Project</Button>

      <Switch>
        <Route exact path={path}>
          <h3>Select a project.</h3>
        </Route>
        <Route path={`${path}/:projectId`}>
          <Project />
        </Route>
      </Switch>
    </div>
  );
};

export default Projects;
