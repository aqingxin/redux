var initState={
  visibilityFilter: "SHOW_ALL",
  todos:[]
}

function addTodo (state=initState,action) {
  switch (action.type){
    case "ADD_LIST":
      return Object.assign({},state,{
        todos:[
          ...state.todos,
          {
            text:action.text,
            id:action.id,
            completed:false
          }
        ]
      })
    case "TOGGLE_TODO":
      return Object.assign({},state,{
        todos:state.todos.map((todo)=>{
          if(todo.id===action.id){
            return Object.assign({},todo,{
              completed:!todo.completed
            })
          }
          return todo
        })
      })
    case "SET_VISIBILITY_FILTER":
      if(action.filter==="SHOW_ACTIVE"){
        console.log(Object.assign({},state,{
          todos:[
            state.todos.filter(todos=>!todos.completed)
          ]
        }))
        return Object.assign({},state,{
          todos:[
            state.todos.filter(todos=>!todos.completed)
          ]
        })
        // return state.todos.filter(todos=>!todos.completed)
      }else if (action.filter==="SHOW_COMPLETED"){
        return Object.assign({},state,{
          todos:[
            state.todos.filter(todos=>todos.completed)
          ]
        })
      }else{
        console.log(state)
        return state
      }
      // break;
    default :
      return state
  }
}

export default addTodo