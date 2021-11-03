import './App.css';
// import Login from './components/Login';
// import Register from './components/Register';
// import Vendor from './components/Vendor';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import ForgotPassword from './components/ForgotPassword';

import Home from './Home';

function App() {
  return (
   <Router>
      <div className="container">
        <Switch>
            <Route exact path="/">
               <Home />
            </Route>
        </Switch>
        
    </div>
   </Router>
  );
}

export default App;
/* <Switch>
            <Route path="/Login">
               <Login />
            </Route>
        </Switch>
        <Switch>
            <Route  path="/register">
               <Register />
            </Route>
        </Switch>
        <Switch>
            <Route  path="/vendor">
               <Vendor />
            </Route>
        </Switch>
        <Switch>
            <Route  path="/forgot">
               <ForgotPassword />
            </Route>
        </Switch> */