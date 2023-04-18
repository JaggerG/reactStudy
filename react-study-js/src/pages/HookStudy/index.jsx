import './index.scss'
import PersonInfoEditor from "./PersonInfoEditor.jsx";
import SyncInput from './SyncInput'
import SearchList from './SearchList'
import MultiLevelPass from "./MultiLevelPass.jsx";
import InputRef from "./InputRef";
import PlayerEffect from "./PlayerEffect.jsx";

const view = () => {
  return (
    <div>
      <h1>Hook学习</h1>
      <div className="container">
        <PersonInfoEditor/>
        <SyncInput/>
        <SearchList/>
        <MultiLevelPass/>
        <InputRef/>
        <PlayerEffect/>
      </div>
    </div>

  )
}
export default view
