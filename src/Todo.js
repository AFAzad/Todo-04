import {useState} from 'react'

const Todo = () => {
    const [inputdata,setInputdata]= useState('');
    const [item,setItem] =useState([]);

    const addItem = ()=>{
      if(!inputdata){
        alert('innvalid input')
      }else{
        setItem([...item,inputdata]);
        setInputdata(['']);
      }
        
    }


  return (
    <div>
        <h1>Todo App</h1>
        <div className="main-div">Add Items
        <div className='child-div' >
            <input type="text" onChange={(e)=>setInputdata(e.target.value)}  value={inputdata}  />
            <button onClick={addItem} >Add List</button>
        </div>
        </div>
    </div>
  )
}

export default Todo