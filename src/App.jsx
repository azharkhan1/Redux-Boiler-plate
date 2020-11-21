import logo from './logo.svg';
import './App.css';
import React from "react";
import {connect} from "react-redux";
import {addTodo,removeData,hello} from "./Store/action";


class App extends React.Component{
 constructor()
 {
   super();
   this.state = {
      value : "",
      empty : "",
      index: ""
   }
 }
 this.props.hello;
  render()
  {
   let {value} = this.state;
    return(
      <div>
        <input hello={hi} type="text" onChange={(e)=>{ this.setState({value:e.target.value})}} />
        <br />
        <button onClick={() => { this.props.add(value) ;} }> Add Todo </button>
        <button onClick={this.props.hello}>Click on this new function</button>
     <ul>
      {this.props.list.map((item,index)=>{
        return <li key={index}>{item}<button onClick={()=>this.props.remove(index)}>Remove</button></li>
      })}
      </ul>
      </div>
    )
  }
  }

const mapStateToProps = (state)=>({
  list : state.todo,
  value : state.value,
})

const mapDispatchToProps = (dispatch)=>({

  add : (data)=> dispatch(addTodo(data)),
  remove : (data)=>dispatch(removeData(data)),
  hello : ()=>dispatch(hello()),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
