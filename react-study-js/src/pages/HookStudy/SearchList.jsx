import {useState} from 'react'

const MyInput = ({handleChange}) => {
  return (
    <div style={{padding: '10px 0', borderBottom: '1px solid'}}>
      <label>
        搜索：
        <input
          onChange={handleChange}
          type={'text'}
        />
      </label>
    </div>
  )
}
const MyList = ({tableList}) => {
  const renderList = (tableList) => {
    let resultList = ''
    if (tableList.length > 0) {
      resultList = tableList.map(item => {
        return (
          <tr key={item.id}>
            <label style={{fontSize: '8px', marginRight: '10px'}}>{item.id}</label>
            <label style={{fontSize: '8px'}}>{item.content}</label>
          </tr>
        )
      })
    } else {
      resultList = (
        <div>未搜索到相关信息</div>
      )
    }
    return resultList
  }
  return (
    <td>
      {renderList(tableList)}
    </td>
  )
}

// 列表数据
const _list = [
  {id: '寿司', content: '寿司是一道传统的日本菜，是用醋米饭做成的。'},
  {id: '木豆', content: '制作木豆最常见的方法是在汤中加入洋葱、西红柿和各种香料。'},
  {id: '饺子', content: '饺子是用未发酵的面团包裹咸的或甜的馅料，然后在沸水中煮制而成的。'},
  {id: '烤肉串', content: '烤肉串是一种很受欢迎的食物，是用肉串和肉块做成。'},
  {id: '点心', content: '点心是广东人的传统喜好，是在餐馆吃早餐和午餐时喜欢吃的一系列小菜。'},
]
export default () => {
  const [tableList, setTableList] = useState(_list)
  // 输入框回调
  const handleChange = (e) => {
    if (e.target.value === '') {
      setTableList(_list)
    } else {
      matchItem(e.target.value)
    }

  }
  // 匹配数据
  const matchItem = (item) => {
    const resultIdx = _list.findIndex(i => {
      return i.id === item
    })
    if (resultIdx > -1) {
      setTableList([_list[resultIdx]])
    } else {
      setTableList([])
    }
  }
  return (
    <div className={'box'}>
      <h2>SearchList</h2>
      <MyInput handleChange={handleChange}/>
      <MyList tableList={tableList}/>
    </div>
  )
}
