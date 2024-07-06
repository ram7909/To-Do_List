import React, { useEffect, useState } from 'react'

const Form = ({ setData, data, editId, setEditId }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (editId != "") {
            const filterData = data.filter((e) => e.id == editId)
            console.log(filterData);
            setTitle(filterData[0].title)
            setDescription(filterData[0].description)
        }
    }, [editId])


    const submitHandler = (e) => {
        e.preventDefault();
        if (editId != "") {
            const obj = { id: editId, title, description };
            setData((prevState) =>
                prevState.map((todo) =>
                    todo.id === editId ? { ...todo, ...obj } : todo
                )
            );
        }
        else {
            const obj = { id: Math.random(), title, description };
            setData([...data, obj]);
        }
        setTitle("");
        setDescription("");
        setEditId("")
    }
    return (
        <>
            <div className="container my-5">
                <form onSubmit={submitHandler}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-5">
                            <input type="text" className="form-control" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="col-md-5">
                            <input type="text" className="form-control" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        {editId != "" ? (
                            <button type="submit" className="btn btn-primary col-md-2">Edit</button>

                        ) : (
                            <button type="submit" className="btn btn-primary col-md-2">Add</button>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form