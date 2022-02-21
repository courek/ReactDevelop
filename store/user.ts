// // 根据业务设置默认数据-- ts就只是多加了类型
// const defaultState = {
//   inputValue: "",
//   list: []
// };
// /**
//  *
//  * state 整个 store 的数据，修改前的 store
//  * action 传递过来的 action
//  */
// export default (state = defaultState, action) => {
//   if (action.type === "change_input_value") {
//     // console.log(action, "action");
//     const newState = JSON.parse(JSON.stringify(state));
//     newState.inputValue = action.value;
//     return newState;
//   } else if (action.type === "list") {
//     state.list = action;
//   }
//   return state;
// };
// // Tip: reducer 可以接受 state，但是绝不能修改 state

// 做一下实验

import React, { useReducer } from "react";

const initialState = { num: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return { ...state, num: state.num - 1 };
    case "increment":
      return { ...state, num: state.num + 1 };
    default:
      return state || {};
  }
};

// const ComponentUseReducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   const { num } = state
//   return (
//     <div>
//       <h2>Using useReducer</h2>
//       Number: {num}
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//     </div>
//   );
// };

export default reducer;
