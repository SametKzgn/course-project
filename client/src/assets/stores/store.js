import axios from 'axios'
import { createStore } from 'redux'
 
const initialState = {
  name:"",
  age:0,
  classId:0,
  type:""
}

const reducer = (state = initialState, action) => { // Reducer function
    switch (action.type) {
      case 'student':
        return { ...state, counter: state.counter + 1 }
      case 'class':
        return { ...state, counter: state.counter - 1 }
      default:
        return state
    }
  }
  
  const store = createStore(reducer) // redux-store
  
  export default store