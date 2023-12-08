import Heading from "./Components/Heading"
import Todoitem1 from "./Components/Todoitem1"
import Todoitem2 from "./Components/Todoitem2"
import DefaultMessages from "./Components/DefaultMessage"
import './Style/app.css'
import { useState } from "react"
function App() {

  let [Items , setItems] = useState([])

  function handleNewItems(newTask , newendDate){
    let newArray = [...Items , {task:newTask , endDate:newendDate}]
    setItems(newArray)
    console.log(newArray)

  }     

  function handleDelItems(taskName){
    const newTodoItems = Items.filter(item => item.task !== taskName )
    setItems(newTodoItems)
  }

  return (<center>
        <Heading></Heading>
        <Todoitem1 handleNewItems={handleNewItems}></Todoitem1>

        {Items.length===0 ? <DefaultMessages></DefaultMessages> :
        Items.map((item) => (<Todoitem2 handleDelItems={handleDelItems} key={item} task={item.task} endDate={item.endDate}></Todoitem2>))
        

        
        }
        
        

      </center>)
  
}

export default App
