import './index.scss';
import {useState} from 'react'

type checkBoxProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyCheckBox: React.FC<checkBoxProps> =
  (onChange) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e)}
        />
      </div>
    )
  }
export default MyCheckBox
