import { useState } from 'react'


function App() {
   const [inputitems, setInputitems] = useState("")
   const[events,setEvents]=useState([])

   function handleChange(event){
    const newValue=event.target.value;
    setInputitems(newValue);
   }
   function addEvents(){
    setEvents(prevEvents =>{
      return[...prevEvents,inputitems];
    });
      setInputitems("");
  }
  function removeEvents(){
    setEvents([]);
  }


  return (
    <div className="min-h-screen bg-amber-300 flex flex-col items-center">  
      <div className="bg-amber-200 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">todo list</h1>
      </div>
      <div className="flex items-center gap-4 mt-4 bg-amber-200 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <input className="flex-grow p-2 border rounded" onChange={handleChange} type="text" placeholder="Enter your todo" value={inputitems}></input>
      
        <span className=''>
          <button className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded" onClick={addEvents}>add</button>
        
        </span>         
        <span className=''>
          <button className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded" onClick={removeEvents}>remove</button>
       
        </span>
        
      </div>
      <div className="flex items-center gap-4 mt-4 bg-amber-200 p-6 rounded-2xl shadow-lg w-full max-w-md">
          <ul className="w-full flex flex-col max-w-md mt-4 space-y-2">
            {events.map(todoEvents=> <li key={todoEvents} className="flex items-center justify-between p-3 bg-amber-200 rounded shadow" >{todoEvents}
              <div className='flex items-center gap-3'>
                <input type="checkbox" className='accent-amber-500' checked={events.completed} />
              </div>
              
            </li>)}
          </ul>
      </div>
      

      
    </div>
  )
}

export default App


