import {useState,useRef} from 'react'
export default () =>{
  const [isSending,setIsSending] = useState(false)
  const [text,setText] = useState('')
  console.log("-------0")
  let timeoutId = null
  console.log(timeoutId+'------1')
  const handleSend = ()=>{
    setIsSending(true)
    timeoutId = setTimeout(()=>{
      alert('已发送')
      setIsSending(false)
    },3000)
    console.log(timeoutId+'------2')
  }
  const handleUndo = ()=>{
    setIsSending(false)
    console.log(timeoutId+'------3')
    clearTimeout(timeoutId)
  }
  return(
    <div className={'box'}>
      <input
        disabled={isSending}
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? '发送中....':'发送'}
      </button>
      <button onClick={handleUndo}>撤销</button>
    </div>
  )
}
