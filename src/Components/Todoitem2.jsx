import { HiOutlineTrash } from "react-icons/hi";
function Todoitem2(props){
    return(
    <div className="row">
        <div className="col-6">
            {props.task}
        </div>
        <div className="col-4">
            {props.endDate}
        </div>
        <div className="col-2">
            <button type="button" className="btn btn-danger custom-btn" onClick={()=>props.handleDelItems(props.task)}><HiOutlineTrash /></button>
        </div>
    </div>)
}

export default Todoitem2