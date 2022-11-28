import React, { useState } from 'react'
const Todo= () =>{
    const [input,setInput]  = useState('');
    const [item,setItem] = useState([]);

    const addItem = () =>{
        setItem([...item,input]);
        setInput('');


    }

    const deleteItem = (id) =>{
        const resetData = item.filter((element,index)=>{
            return index !== id;
        })
        setItem(resetData);

    }
    const removeAll = () =>{
        setItem([]);
    }

    return(
        <>
        <div className="main-div">
            <div className="child-div">
                <h1>Todo-List</h1>
                <div className="add-item">
                    <div className="">
                        <input type="text" className="input" placeholder="Add Your Items" 
                        onChange={(e)=>setInput(e.target.value)}
                        value={input} />
                        <button id="add-button" onClick={addItem} > Add</button>
                    </div>
                </div>
                <div className="show-list">
                    {
                        item.map((element,index)=>{
                            return(
                                <div className="display-list" key={index}>{element} : 
                                <button id="deletebtn" title='Add Item'onClick={()=>deleteItem(index)}>Delete</button></div>
                            )
                        })
                    }
                    
                </div>
                <div className="remove-all">
                    <button className="clear-btn" onClick={removeAll} >Remove All</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo;