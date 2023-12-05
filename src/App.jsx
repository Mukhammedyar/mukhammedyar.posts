import './app.css'
import { BrowserRouter } from "react-router-dom"
import Navbar from "./assets/components/Navbar/Navbar"
import AppRouter from "./assets/components/AppRouter/AppRouter"
import { useState,useEffect } from "react"
import { AuthContext } from "./assets/components/Context/context"

function App() {
  const [isAuth, setIsAuth] = useState(false)
  
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])
  


  return (
    <AuthContext.Provider value={{
      isAuth, 
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter /> 
      </BrowserRouter>
    </AuthContext.Provider>
    
  )
}

export default App



