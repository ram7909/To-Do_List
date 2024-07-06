import React, { useState } from 'react'
import ShowData from './components/ShowData'
import Form from './components/Form'
const App = () => {
  const [data, setData] = useState([
    {id:1,title:'hello',description:'hello world'},
    {id:2,title:'Superman',description:'Salman Ka Fan'},
  ]);

  const [editId, setEditId] = useState("")
  console.log("edit id:",editId);
  const deleteItem = (id)=>{
    setData(data.filter((e)=>e.id != id))
  }
  return (
    <>
      <Form setData={setData} data={data} editId={editId} setEditId={setEditId} />
      <ShowData data={data} deleteItem={deleteItem} setEditId={setEditId} />
    </>
  )
}

export default App