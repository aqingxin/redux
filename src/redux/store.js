import { createStore } from 'redux';
import todo from './reducers';

let store = createStore(todo);

export default store