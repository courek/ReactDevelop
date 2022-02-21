import { createStore } from "redux";
import reducer from "./reducer";
const store = createStore(reducer);
export default store;

// 高级用法 ⬇️
// // 需要使用react-redux 才能模块化,好像
// // 还需要 redux-thunk 才能拆分,中间件thunk
// // 还要安装 Redux DevTools 开发插件,类似 vuetoolxxx啥的
// import { createStore, applyMiddleware, compose } from "redux";
// // 引入模块化

// import reducer from "./reducer";
// import thunk from "redux-thunk";
// // 这里是使用浏览器插件的配置, 需要安装 redux-devtools-extension
// const composeFn = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//   : compose;
// const enhancer = composeFn(applyMiddleware(thunk)); // 函数组合
