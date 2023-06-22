import {} from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
// import router_two from './Router/routerTwo';


function App() {
  return (
    <>
       <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
