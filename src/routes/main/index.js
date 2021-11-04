import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterPage from '../../pages/RegisterPage';


const App = () => (
  <Suspense fallback={
    <div>
      <MyLoader />
    </div>
  }>
    <ToastContainer />

   <BrowserRouter>
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
   </BrowserRouter>

  </Suspense>
)

export default App;
