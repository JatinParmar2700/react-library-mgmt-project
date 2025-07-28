import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fiction from './components/Fiction.jsx'
import Nonefiction from './components/Nonefiction.jsx'
import Selfhelp from './components/Selfhelp.jsx'
import Error from './components/Error.jsx'
import Addbook from './components/Addbook.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Search from './components/Search.jsx'
import Bookdetails from './components/Bookdetails.jsx'
import {Provider} from "react-redux"
import{ store } from "./redux/store.js"  


//creating router


const appRouter = createBrowserRouter([
  {
    path: '/', // This is the parent route for  entire application layout
    element: <App />, // App component provides the common layout (Header, Outlet)
    errorElement: <Error />, // Error page for this route and its children
    children: [ // These are the "pages" that will render inside App's <Outlet />
      {
        index: true, // This makes Search.jsx the default content for the "/" path
        element: <Search />, // Search is now  landing page
      },
      
      {
        path: 'fiction', 
        element: <Fiction />,
      },
      {
        path: 'nonefiction', 
        element: <Nonefiction />,
      },
      {
        path: 'selfhelp', 
        element: <Selfhelp />,
      },
      {
        path: 'addbook', 
        element: <Addbook />,
      },
      {
        path:"/book/:id",
        element:<Bookdetails />
      }
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)
