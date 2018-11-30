import React,{ Component } from 'react';
import store from '../redux/store';
import * as action from '../redux/actions';

class AddInput extends Component {
  constructor(){
    super()
    this.state={
      inputValue:''
    }
  }
  // componentDidMount(){
  //   store.subscribe(() =>    //监听state更新
  //     console.log(store.getState())    //每次更新state时
  //   )
  // }
  search(){
    if(this.state.inputValue.trim()){
      store.dispatch(action.ADD_LIST(this.state.inputValue));  //派发出一个action
      this.setState({
        inputValue:''
      })
    }
  }
  inputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  render(){
    return(
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
        <button onClick={this.search.bind(this)}>Add</button>
      </div>
    )
  }
}
export default AddInput