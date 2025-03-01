import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import './styles/main.scss';
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Category from './components/Category/Category'
import Details from './components/Details/Details'

function App() {

  const routes = createBrowserRouter([
    {path:"/",element: <LayOut/> , children:[
      {index:true , element: <Home /> },
      {path:"home" , element: <Home /> },
      {path:"category", element:<Category /> },
      { path: "details/:idMeal", element: <Details /> }
,




      {path: "*" , element: <ErrorPage/>} 

    ]}
  ])

  return (
    <>
      <RouterProvider router={routes}>

      </RouterProvider>
     
    </>
  )
}

export default App
