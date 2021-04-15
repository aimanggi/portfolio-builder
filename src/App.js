import "./assets/scss/style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio/:id/:page" component={Details} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
