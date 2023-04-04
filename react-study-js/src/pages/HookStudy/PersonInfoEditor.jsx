import {useState} from "react";

const PersonInfoEditor = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('Who R U ?')
  const [btnName, setButtonName] = useState('SaveProfile')
  const [showText, setShowText] = useState(false)

  // firstName 变化
  const onFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  // lastName 变化
  const onLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  // 提交按钮
  const onBtnClick = () => {
    if (btnName === 'SaveProfile') {
      setButtonName('EditProfile')
      setShowText(true)
      setMessage(concatInfo())
    } else {
      setButtonName('SaveProfile')
      setShowText(false)
    }
  }
  // 合并信息
  const concatInfo = () => {
    return `Hello ${firstName} ${lastName} !!!`
  }
  return (
    <div className='box'>
      <h2>PersonInfoEditor</h2>
      <div className='name-bar'>
        <label>First Name：</label>
        <input
          onChange={onFirstNameChange}
          style={{display: showText ? 'none' : 'inline-block'}}
          type='text'/>
        <label style={{display: showText ? 'inline-block' : 'none'}}>
          {firstName}
        </label>
      </div>
      <div className='name-bar'>
        <label>Last Name：</label>
        <input
          onChange={onLastNameChange}
          type='text'
          style={{display: showText ? 'none' : 'inline-block'}}/>
        <label
          style={{display: showText ? 'inline-block' : 'none'}}>
          {lastName}
        </label>
      </div>
      <button onClick={onBtnClick}>{btnName}</button>
      <div>{message}</div>
    </div>
  )
}

export default PersonInfoEditor
