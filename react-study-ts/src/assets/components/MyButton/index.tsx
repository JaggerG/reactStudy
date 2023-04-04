import React from 'react';
import './index.scss'

// 按钮类型
const btnTypes = [
  'primary',
  'success',
  'fail',
  'warn',
]

// 判断按钮类型
const checkBtnTypes = (btnType: string): string => {
  const hasType: Boolean = btnTypes.includes(btnType)
  let _type: string = hasType ? `btn-${btnType}` : `btn-primary`
  _type = ['btn', _type].join(' ')
  console.log(_type)
  return _type
}

// 按钮参数
interface btnProps {
  btnName: string;
  btnType: string;
  onClick: any;
}


const MyButton: React.FC<btnProps> = (
  {btnName, btnType, onClick}
) => {
  return (
    <button
      onClick={onClick}
      className={checkBtnTypes(btnType)}
    >{btnName}</button>
  )
}

export default MyButton;
