import { createBrowserRouter, RouterProvider, Link }
  from 'react-router-dom'

import Home from './views/Home'
import Contato from './views/Contato'

export default function Routes() {
  const routes = createBrowserRouter([{
    path: '/',
    element: <div>
      <h2>Aqui está o projeto</h2>
      <p><Link to="/home">Home</Link></p>
      <Link to="/contato">Contato</Link>
    </div >
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/contato',
    element: <Contato />
  }])

  return <RouterProvider router={routes} />
}