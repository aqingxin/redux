import React , {Component} from 'react';
import store from '../redux/store';
import * as action from '../redux/actions';


class List extends Component{
  constructor(){
    super()
    this.state={
      list:[]
    }
    this.toogleTodo=this.toogleTodo.bind(this);
  }

  componentDidMount(){
    store.subscribe(() =>{    //监听state更新
        // console.log(store.getState())
        this.setState({    //每次state更新的时候就把最新的state赋值给组件的list
          list:store.getState().todos
        })
      }
    )
  }
  toogleTodo(id){
    store.dispatch(action.TOGGLE_TODO(id));
  }

  render(){
    let ListItem=this.state.list.map((item,index)=>{
      return(<li key={index} onClick={()=>this.toogleTodo(item.id)}> {item.text} </li>) 
    })
    return (
      <div>
        <h4>list</h4>
        <ul>
          {
            ListItem
          }
        </ul>
      </div>
    )
  }
}


export default List