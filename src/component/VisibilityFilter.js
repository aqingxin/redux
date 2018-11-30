import React , { Component } from 'react';
import store from '../redux/store';
import * as action from '../redux/actions';


class VisibilityBtn extends Component{
  render(){
    return(
      <div>
        <button onClick={()=>{
          store.dispatch(action.setVisibilityFilter('SHOW_ALL'))
        }}>all</button>
        <button onClick={()=>{
          store.dispatch(action.setVisibilityFilter('SHOW_ACTIVE'))
        }}>active</button>
        <button onClick={()=>{
          store.dispatch(action.setVisibilityFilter('SHOW_COMPLETED'))
        }}>completed</button>
      </div>
    )
  }
}

export default VisibilityBtn