import { Fragment } from 'react'
import { Login } from './login'
import Signup from './signup'
import Loader from './loader'

function App() {
  return (
    <Fragment>
      <section className='app'>
        <div className="login">
          <Login />
        </div>
        <div className="signup">
          <Signup />
        </div>
        <div className="loader">
          <Loader />
        </div>
      </section>
    </Fragment>
  )
}

export default App;
