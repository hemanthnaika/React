
import { useSelector,useDispatch }from 'react-redux' 
import AddItem from './AddItem'
const List = () => {
  const dispatch=useDispatch()
    const items = useSelector(state => state)
    const handleDelete=(id)=>{
      console.log(id)
      const action={
        type:"DELETE_ITEM",
        payload:id
      }
      dispatch(action)
    }
   

    return (
        <div>
          <AddItem/>
            <ul>
                {
                    items.map(item => {
                        
                      return(
                        <li>{item.text}<button onClick={()=>{handleDelete(item.id)}}>Delete</button>
                        </li>
                      )
                      })
                    }
            </ul>
        </div >
    );
}

export default List;