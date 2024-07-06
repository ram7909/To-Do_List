import React from 'react'

const ShowData = ({data,deleteItem,setEditId}) => {
  return (
    <div style={{width:'650px',margin:'auto'}}>
        {data?.map((e)=>
            <div key={e.id} className='bg-dark text-center my-5 p-3' style={{borderRadius:'10px',border:'2px solid yellow'}}>
                <h2>{e.id}</h2>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
                <button type="button" onClick={()=>setEditId(e.id)} className="btn btn-warning mx-2">Edit</button>
                <button type="button" onClick={()=> deleteItem(e.id)} className="btn btn-primary mx-2">Delete</button>
            </div> 
        )}
    </div>
  )
}

export default ShowData