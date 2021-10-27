import { Suspense } from 'react'

import { Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader'

import HomePage from '../../pages/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// RegisterPage
import RegisterPage from '../../pages/RegisterPage';

const App = () => (
  <Suspense fallback={ 
    <div>
      <MyLoader /> 
    </div>
  }>
    <ToastContainer/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/register' component={RegisterPage} />
    </Switch>
  </Suspense>
)

export default App