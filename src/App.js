// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path={['/', '/home']}>
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
