import Topbar from "./components/topbar/topbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/register">
        {user ? <Home /> : <Register />}
        </Route>
        <Route path="/setting">
        {user ? <Setting /> : <Register />}
        </Route>
        <Route path="/write">
        {user ? <Write /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>

    </Router>


  );
}

export default App;
