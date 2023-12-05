import { useContext } from 'react';
import { useRoutes } from 'react-router-dom'
import RouterError from '../../../API/Error/PageNotFound/RouterError';
import About from '../About/About';
import Posts from '../AllPosts/posts';
import { AuthContext } from '../Context/context';
import LoginPage from '../LoginPage/LoginPage';
import Navbar from '../Navbar/Navbar';
import PostPage from '../PostPage/PostPage';



export default function AppRouter() {
  const { isAuth } = useContext(AuthContext)
  
  const PublicRoute = [
    { path: "/about", element: <About/> },
    { path: "/", element: <About/> },
    { path: "/posts", element: <Posts/> },
    { path: "/posts/:id", element: <PostPage/> },
    { path: "*", element: <RouterError/> },
  ];
  const PrivateRoute = [
    { path: "/login", element: <LoginPage/>},
    { path: "*", element: <LoginPage/>}
  ]

  let publicRoute = useRoutes(PublicRoute);
  const privateRoute = useRoutes(PrivateRoute);

  return(
    isAuth
      ? 
      publicRoute
      :
      privateRoute
  )
}
