import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home' 
import SignUp from './components/Signup'
import Login from './components/Login'
import AccountSettings from './components/AccountSettings'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children:[
                {index: true, element: <Home />},
                {path: '/signup', element: <SignUp />},
                {path: '/login', element: <Login />},
                {path: '/account-settings', element: <AccountSettings />}
            ]
        }
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default App