import { useState } from "react";
const Content = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState([""]);

  const handlerSubmit = () => {
    //setItems((prev) => [...prev]);
    //?Add to the array
    setValue('')
    setItems(prev=>[...prev,value])

};
  const handlerInput = (e) => {
    setValue(e.target.value);
  };
//   console.log("value change");
//?Delete the item
const  handlerDelete=(item)=>{
    // console.log(item)
    setItems(prev=>prev.filter(i=>i !== item))
}
  return (
    <>
      <h1>Todo</h1>

      <input value={value} onChange={handlerInput} type="text" />
      <button onClick={ handlerSubmit } type="submit">Add</button>

      <ul>
        {items.map((item) => (
          <li>{item}<button onClick={ ()=>{handlerDelete(item)}}>Delete</button></li>
        ))}
      </ul>
    </>
  );
};

export default Content;
