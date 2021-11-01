import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader';
import HomePage from '../../pages/HomePage';
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
      </Switch>
    </BrowserRouter>
  </Suspense>
)

export default App;
