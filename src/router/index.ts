import Home from '../views/Home'
import Content from '../views/Content'
const routes = [
  {
    path: '/',
    element: Content,
    children: [{ path: 'home', element: Home }],
  },
]

export default routes
