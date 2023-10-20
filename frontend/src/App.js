import './App.css';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/place/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
