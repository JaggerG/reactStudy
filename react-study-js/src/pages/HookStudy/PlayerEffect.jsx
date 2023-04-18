import {useRef, useState,useEffect} from 'react'
const VideoPlayer = ({src,isPlaying}) =>{
  const ref = useRef(null)
  useEffect(()=>{
    if(isPlaying){
      ref.current.play()
    }else{
      ref.current.pause()
    }
  },[isPlaying])

  return(
    <video width={"340"} height={"240"} ref={ref} src={src} loop playsInline />
  )
}


export default () =>{
  const [isPlaying,setIsPlaying]=useState(false)
  return (
    <div className={'box'}>
      <button onClick={()=>setIsPlaying(!isPlaying)}>
        {isPlaying? '暂停':'播放'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"}
      />
    </div>
  )
}
