import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/context'

export default function LoginPage() {
  const navigate= useNavigate()
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const [login, setLogin] = useState({ login: "", password: "" })
  const [user, setUser] = useState([])

  
  useEffect(() => {
    async function getUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUser([...user, response.data])
      console.log(response.data);
    }
    getUsers()

  }, [])


  const checkUsers = (e) => {
    e.preventDefault()
    // if(user) {
    //   for (let u = 0; u < user.length; u++) {
    //     if (login.login === user[u].email || login.password===user[u].username ) {
    //       return setIsAuth(true);
    //     }
    //     else console.log(false);
    //   }
    // } 
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
    navigate('/')
  }

  

  // Karley_Dach@jasper.info
  // Leopoldo_Corkery

  return (
    <div className='w-100 container-fluid bg-dark d-flex align-items-center' style={{ height: '100vh' }}>
      <form action="POST" className='w-25 mx-auto d-flex flex-column aligin-items-center p-5 bg-light'>
        <input
          className='input'
          type="login"
          placeholder='login...'
          value={login.login}
          onChange={e => setLogin({ ...login, login: e.target.value })} />
        <input
          className='input'
          type="password"
          placeholder='password...'
          value={login.password}
          onChange={e => setLogin({ ...login, password: e.target.value })} />
        <button
          type='submit'
          onClick={checkUsers}
          className="btn btn-primary"
        >Login</button>
      </form>
    </div>
  )
}
