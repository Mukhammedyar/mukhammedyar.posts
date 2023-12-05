import {React, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/context'

export default function Navbar() {
    const navigate=useNavigate()
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logOut = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
        navigate('/login')
    }

  return (
      <div className='bg-light border-none border-bottom shadow d-flex '>
          <ul className="nav justify-content-start container">
              <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/posts'}>Posts</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link"  to={'/about'}>About</Link>
              </li>
          </ul>
          <Link to={'/posts'} onClick={logOut} className='btn nav-item'>Log out</Link>
    </div>
  )
}
