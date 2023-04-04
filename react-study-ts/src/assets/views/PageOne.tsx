import MyButton from "../components/MyButton";
import MyCheckBox from "../components/MyCheckbox";

const view = () => {
  const doClick = (event: React.MouseEventHandler<HTMLButtonElement>) => {
    console.log('doClick')
  }
  const doChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('doChange')
  }
  return (
    <div>
      <MyButton
        btnName="成功"
        btnType="warn"
        onClick={doClick}
      />
      <MyCheckBox
        onChange={doChange}
      />
    </div>
  )
}
export default view;
