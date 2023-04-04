import {useState} from 'react'

const MyInput = ({label, text, handleChange}) => {
  return (
    <div style={{marginBottom: '10px'}}>
      <label>
        {label}
        <input
          onChange={handleChange}
          value={text}/>
      </label>
    </div>

  )
}


export default () => {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div className={'box'}>
      <h2>SyncInput</h2>
      <MyInput
        text={text}
        handleChange={handleChange}
        label={'第一个输入框'}/>
      <MyInput
        text={text}
        handleChange={handleChange}
        label={'第二个输入框'}/>
    </div>
  )
}
