var newListId=0;    //定义列表的id，主要用于切换列表状态和删除列表
export const ADD_LIST = (text) => {    //添加列表时的action
  return {
    type:'ADD_LIST',    //每个action的type都为必需
    id:newListId++,
    text
  }
}

export const TOGGLE_TODO = (id) => {
  return {
    type:'TOGGLE_TODO',
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type:'SET_VISIBILITY_FILTER',
    filter
  }
}