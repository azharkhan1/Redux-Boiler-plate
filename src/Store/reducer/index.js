import { compose } from "redux";
import { addTodo } from "../action";


const INITIAL_STATE = {
    todo : [],
    value : "",
}

export default (state=INITIAL_STATE,action)=>{
    return state;
}