import { useState } from 'react'
import './App.css'
import { Fragment } from 'react'
import { Login } from './login'

function App() {
  return (
    <Fragment>
    <div className="login">
      <Login/>
    </div>
    </Fragment>
  )
}

export default App;
