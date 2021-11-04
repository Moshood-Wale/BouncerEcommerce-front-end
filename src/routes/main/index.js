import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterPage from '../../pages/RegisterPage';
// import ProductPage from '../../pages/ProductPage';
import Macbook from '../../pages/Macbook'
import Ipad from '../../pages/ipad'
import Iphone from '../../pages/Iphone';
import Accessories from '../../pages/Accessories'
import VerifyOtpPage from '../../pages/VerifyOtpPage';
import ForgotPasswordPage from "../../pages/ForgotPassword"


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
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/mac' component={Macbook}/>
        <Route exact path='/ipad' component={Ipad} />
        <Route exact path='/iphone' component={Iphone} />
        <Route exact path='/accessories' component={Accessories} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/verify' component={VerifyOtpPage} />
        <Route exact path='/forgot-password' component={ForgotPasswordPage} />
      </Switch>
    </BrowserRouter>

  </Suspense>
)

export default App;
