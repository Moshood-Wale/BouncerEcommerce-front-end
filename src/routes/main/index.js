import { Suspense } from 'react'

import { Route, Switch } from "react-router-dom";
import MyLoader from '../../utils/loader'

import HomePage from '../../pages/HomePage'

// RegisterPage
import RegisterPage from '../../pages/RegisterPage';

const App = () => (
  <Suspense fallback={ 
    <div>
      <MyLoader /> 
    </div>
  }>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/register' component={RegisterPage} />
    </Switch>
  </Suspense>
)

export default App