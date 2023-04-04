import {Link} from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className='router-box'>
      <button>
        <Link to={'/hookStudy'}>HookStudy</Link>
      </button>
      <button>
        <Link to={'/hookStudy'}>HookStudy</Link>
      </button>
    </div>
  )
}
export default Home
