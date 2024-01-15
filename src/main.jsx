import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LayOut from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/About.jsx'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <LayOut/>,
//     children: [
//       {
//         path:'',
//         element: <Home/>
//       }, 
//       {
//         path:'/about',
//         element: <About/>
//       }, 
//       {
//         path:'/contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut/>}>
        <Route path='' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/user/:userId' element={<User/>} />
        <Route
         loader={githubInfoLoader}
         path='/github' element={<Github/>} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
