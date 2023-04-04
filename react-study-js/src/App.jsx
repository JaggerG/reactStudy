import './App.css'
import {useRoutes} from 'react-router-dom'
import routes from './router'

function App() {
  console.log()
  const outlet = useRoutes(routes)
  return (
    <div>
      {outlet}
    </div>

  )
}

export default App
