import logo from "./logo.svg";
import Public from "./components/layout/Public";
import "./assets/scss/style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
// import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
