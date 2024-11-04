import React, { useEffect, useState } from 'react'
import { AdminView, EmployeeView, Login } from './components'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { data } from 'autoprefixer'


const App = () => {
  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {

  }


  // useEffect(() => {


  // }, [])

  console.log(userData)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {/* <EmployeeView /> */}
      {/* <AdminView /> */}
    </>
  )
}

export default App