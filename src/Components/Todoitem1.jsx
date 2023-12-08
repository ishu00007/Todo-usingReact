import { HiPlus } from "react-icons/hi";
import { useRef } from "react";
function Todoitem1(props){


    let TaskElement = useRef()
    let EndDateElement = useRef()
    function onAddBtnClick(){
      let Task = TaskElement.current.value
      let EndDate = EndDateElement.current.value
      
      TaskElement.current.value=''
      EndDateElement.current.value=''
      {props.handleNewItems(Task , EndDate)}
    }
    return( 
    <div className="row">
      <div className="col-6">
        <input type="text" value={props.task} ref={TaskElement}/>
      </div>
      <div className="col-4">
        <input type="date" value={props.endDate} ref={EndDateElement}/>
      </div>
      <div className="col-2 ">
        <button className="btn btn-success custom-btn" onClick={onAddBtnClick}><HiPlus/></button>

      </div>
    </div>)
}

export default Todoitem1