import router from '@/assets/router/index'
import {useRoutes} from 'react-router-dom'

function App() {
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {outlet}
    </div>
  )
}

export default App
