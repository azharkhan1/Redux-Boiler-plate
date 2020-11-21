

const addTodo = (data)=>{
  console.log(data);
return (dispatch)=>{
    dispatch({
      type : "setdata",
      data : data,
    })
   
}
}

const removeData = (data)=>{
  return(dispatch)=> 
   dispatch({
      type : "removedata",
      data : data,
  })
}

const hello = ()=>{
  return (dispatch)=>
        console.log("hello sohaib");
}

export {
    addTodo,
    removeData,
    hello,
}