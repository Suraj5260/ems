import React, { useEffect, useState } from 'react'
import { AdminView, EmployeeView, Login } from './components'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { data } from 'autoprefixer'


function App() {
  const [user, setUser] = useState(null)


  console.log();



  // useEffect(() => {


  // }, [])

  // console.log(userData)

  return (
    <>
      <Login />
      {/* <EmployeeView /> // I did disable the auth provider btw */}
      {/* <AdminView /> */}
      <h1>Hi man</h1>

    </>
  )
}

export default App